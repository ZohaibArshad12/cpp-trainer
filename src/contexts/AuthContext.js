import Auth from "@aws-amplify/auth";
import { useState, createContext, useEffect } from "react";

const AuthContext = createContext(null);

const AuthStatus = {
  LOADING: "LOADING",
  SIGNED_IN: "SIGNED_IN",
  SIGNED_OUT: "SIGNED_OUT",
};

function toAppUser(cognitoUser) {
  return {
    firstName: cognitoUser.attributes.given_name,
    lastName: cognitoUser.attributes.family_name,
    displayName: `${cognitoUser.attributes.given_name} ${cognitoUser.attributes.family_name}`,
    email: cognitoUser.attributes.email,
    id: cognitoUser.username,
    group:
      cognitoUser?.group ||
      cognitoUser?.signInUserSession?.accessToken?.payload["cognito:groups"][0],
  };
}

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    authStatus: AuthStatus.LOADING,
    user: null,
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setAuthState({
          user: toAppUser(user),
          authStatus: AuthStatus.SIGNED_IN,
        });
      } catch (e) {
        try {
          const user = await Auth.currentUserCredentials();
          if (user) {
            setAuthState({
              user: toAppUser({
                attributes: {
                  given_name: "Anonymous",
                  family_name: "Guest",
                  email: "",
                  username: "guest",
                },
                group: "guest",
              }),
              authStatus: AuthStatus.SIGNED_IN,
            });
          }
        } catch (ex) {
          console.log(ex);
          setAuthState({
            authStatus: AuthStatus.SIGNED_OUT,
            user: null,
          });
        }
      }
    };
    checkAuthStatus();
  }, []);

  const signIn = async (username, password) => {
    const user = await Auth.signIn(username, password);
    setAuthState({
      user: toAppUser(user),
      authStatus: AuthStatus.SIGNED_IN,
    });
  };

  const signUp = (email, password, firstName, lastName) => {
    return Auth.signUp({
      password,
      username: email,
      attributes: {
        given_name: firstName,
        family_name: lastName,
      },
    });
  };

  const resetPassword = (email) => {
    return Auth.forgotPassword(email);
  };

  const confirmResetPassword = (email, code, newPass) => {
    return Auth.forgotPasswordSubmit(email, code, newPass);
  };

  const signOut = async () => {
    setAuthState({
      authStatus: AuthStatus.LOADING,
      user: authState.user,
    });
    await Auth.signOut();
    setAuthState({
      authStatus: AuthStatus.SIGNED_OUT,
      user: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        authStatus: authState.authStatus,
        signIn,
        signUp,
        signOut,
        resetPassword,
        confirmResetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider, AuthStatus };
