import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import configureStore from './store';
import { Provider } from 'react-redux';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StyledEngineProvider } from '@mui/material/styles';
import { SettingsProvider } from './context/SettingsContext.js';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  // restoreCSRF();

  // window.csrfFetch = fetch;
  window.store = store;
  // window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </LocalizationProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);