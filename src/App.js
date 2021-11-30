import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components/macro";
import { useRoutes } from "react-router-dom";
import createTheme from "./theme";
import useTheme from "./hooks/useTheme";
import StylesProvider from "@mui/styles/StylesProvider";
import jssPreset from "@mui/styles/jssPreset";
import { create } from "jss";

import routes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { HelmetProvider, Helmet } from "react-helmet-async";

import "./i18n";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

function App() {
  const { theme } = useTheme();
  const routedContent = useRoutes(routes);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | ControlCatalog"
        defaultTitle="ControlCatalog"
      />
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={createTheme(theme)}>
          <ThemeProvider theme={createTheme(theme)}>
            {routedContent}
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </HelmetProvider>
  );
}

export default App;
