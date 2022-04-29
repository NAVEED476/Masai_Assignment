import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import Display_Data from './Maincomponent/Display_Data';


import { ADD_USER } from './redux/action-type';
import Add from './Maincomponent/Adduser';
import Edit from './Maincomponent/Edit';

import { Routes } from "./Maincomponent/routes"

function App() {
  return (
    <div className="App">
      <Routes />



    </div>
  );
}

export default App;
