# React Template

## For Setup
```
  1 create-react-app react-template
  2 npm run eject
```

## For SCSS
```
  1 npm i node-sass
  2 Crate `app.scss` file into src/assets/styles
  3 import `app.scss` to `App.js`
```

## For Eslint
```
  1 For Eslint copy `.eslintrc` file to root
  2 npm i eslint eslint-config-airbnb
  3 Add `/* eslint-disable */` at top of `serviceWorker.js`
```

## For Prop Types
```
  1 npm i prop-types
  USE : 
    ComponentName.propTypes = {
    };
    ComponentName.defaultProps = {
    };
```

## For Routing
```
  1 npm i react-router-dom react-router history
  2 Create `ExtendedBrowserRouter.js` and add to `App.js`
  3 Create `Routes.js` file and add to `App.js` inside `ExtendedBrowserRouter` component
```

## For Notification
```
  1 npm i react-toastify
  2 Add `ToastContainer` component to `App.js`
  3 Create `Notifications.js` into utils folder
```

## For Axios
```
  1 npm i axios
  2 Create `index.js` into config folder
  3 Create `api.js` into utils folder
```

## For Redux, Thunk and Promise middleware
```
  1 npm i redux react-redux redux-promise-middleware redux-thunk
  2 Add `Provider` component into `App.js`
  3 Create `reduxStore and rootReducer` into store folder
  4 Add reduxStore to `Provider` in `App.js`
```

## For Redux Form
```
  1 npm i redux-form
  2 Add redux form to `rootReducer.js`
```
