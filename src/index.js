import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

// require( 'dotenv' ).config()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
