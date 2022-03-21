import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'

function App() {
  return (
    <>
      <Router>
        <div className='App'>
        <Routing />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
