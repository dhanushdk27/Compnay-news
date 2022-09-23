import logo from './logo.svg';
import './App.css';
import {  Layout } from 'antd';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Alldetails from './Details/file/Alldetails';
import Newsdetail from './components/newsdetailspage/Newsdetail';
import Home from './Navcom/Home';




function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact>
      <Home/>
       </Route>
        <Route path='/Alldetails/' exact>
          <Alldetails />
        </Route>
        <Route path='/Newsdetail/' exact>
       <Newsdetail/>
        </Route>
      </Switch>
     
    </Router>

  );

}

export default App;
