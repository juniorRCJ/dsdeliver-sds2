import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import RoutesConfig from './RoutesConfig';

function App() {
  return (
    <>
    <RoutesConfig />
    <ToastContainer />
    </>
  )
}

export default App;