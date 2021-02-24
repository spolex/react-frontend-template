import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <Header/> 
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// which will make it so that changes you make automatically update in the 
// app without needing to refresh the whole page:
if (module.hot) module.hot.accept();
