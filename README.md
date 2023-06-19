# Shop client documentations

----

1. **This is a full-stack application, the REST API server is located [here](https://github.com/mykola-kond-73/shop-server)**

2. **Here user react.**


----

## Available Scripts

In the project directory, you can run:

### `yarn start`

Run dev server

### `yarn run test`

Launches the test runner in the interactive watch mode.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn run ts:w`

This command starts tsc in watch mode. The dist folder is created and the creation process is displayed on the screen.

### `yarn run ts`

This command starts tsc. The dist folder is created.

### `yarn run lint`

This command starts eslint. All project files are passed through eslint, which finds inconsistencies in code writing style, according to the .eslintrc.yml file. All found inconsistencies are displayed on the screen after execution of the command.

### `yarn run lint:fix`

This command starts eslint. All project files are passed through eslint, which finds inconsistencies in code writing style, according to the .eslintrc.yml file. All found inconsistencies that eslint can correct, it corrects itself.

----

## `.env file`
In .env file musst be kyes:

`REACT_APP_SERVER` - with url-address on your server (localhost:8000)

`REACT_APP_KEY` - with secret key

----

## `Accounts`

1. Admin:
    1. login: test@gmail.com
    2. password: testingpass
2. USer:
    1. login: testCust@gmail.com
    2. password: testingCust