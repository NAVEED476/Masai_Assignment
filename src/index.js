import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from "./redux/store"
import Home from './components/Home';
import Display_Data from './Maincomponent/Display_Data';
import Edit from './Maincomponent/Edit';
import Add from './Maincomponent/Adduser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>

       
       
       {/* <Home/> */}
       {/* <Add/> */}
       
       
       {/* <Display_Data/> */}

       <App />

      

      </React.StrictMode>
    </Provider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
