
# Getting Started with Create React App

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set up
To set up and run the project you need to install the following dependencies and follow the steps listed below.
### Dependencies
1. node : Download node [here](https://nodejs.org/en/download/).
2. Yarn :  You can see installation guide [here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
3.  AWS Cli : Follow [this](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)  to install AWS cli.
4. Amplify Cli: Follow this [installation guide](https://docs.amplify.aws/cli/start/install/).
### Pre-requisite
1. Go to home directory of your device.
	- For MacBook run the following command.
	

			    terminal> cd ~
	- On Windows go to following directory.

			    C:\Users\<yourusername>
2. Add a directory named ".aws"
	- For MacBook run the following command.
	

				terminal> mkdir .aws
	- For Windows Create a folder named ".aws".
3.  Go to ".aws" folder and create two files named "config" and "credentials".
4.  Get your credentials following this [guide](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html).
5. open "credentials" file and add your aws credentials in following format.
    ```
    [<profile_name>] 
    aws_access_key_id= <your_access_key_id>
    aws_secret_access_key= <your_aws_secret_access_key>
    aws_session_token= <your_aws_session_token> (optional)
    ```

6. open "config" file and add your profile config format in following format.
	 ```
      [profile <profile_name>]
      region=<your_aws_region>
	  output=json
     ```

###  Steps
1. Firstly you need to clone the project to your local directory.
2. Checkout the desired branch you want to use.
3. Open the project and terminal in your preferred IDE e.g. vs code (available [here](https://code.visualstudio.com/download)).
4. Run the following command to install all the packages.
    ```
            yarn install
    ```
5. Initiate amplify env using the command below and following the embedded video.

    ```
            amplify init
    ```


  https://user-images.githubusercontent.com/91051010/139024554-af83ce85-41b0-489d-b40f-be373a384ed5.mov

6. Pull the backend from cloud.
    ```
            amplify pull
    ```
7. Start the project.
    ```
            yarn start
    ```

## Available Scripts

  

In the project directory, you can run:

  

### `yarn start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

### `yarn test`

  

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `yarn build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `yarn eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  

### Analyzing the Bundle Size

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  

### Making a Progressive Web App

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  

### Advanced Configuration

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  

### Deployment

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  

### `yarn build` fails to minify

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
