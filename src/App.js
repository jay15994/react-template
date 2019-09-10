import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './assets/styles/app.scss';
import ExtendedBrowserRouter from './ExtendedBrowserRouter';
import Routes from './Routes';
import reduxStore from './store';

function App() {
  return (
    <Provider store={reduxStore}>
      <ExtendedBrowserRouter>
        <div className="App">
          <ToastContainer id="forToast" />
          <Routes />
        </div>
      </ExtendedBrowserRouter>
    </Provider>
  );
}

export default App;
