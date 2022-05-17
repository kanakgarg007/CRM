import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListTenantComponent from './component/ListTenantComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateTenantComponent from './component/CreateTenantComponent';
import wormhole from './component/wormhole';
import ViewTenantComponent from './component/ViewTenantComponent';

function App() {
  return (
    <div>
      <Router>
        <div className= "container">
            <HeaderComponent />
              <div className= "container">
                <Switch>
                  <Route path = "/" exact component = {wormhole}></Route>
                  <Route path = "/wormhole" component = {wormhole}></Route>
                  <Route path = "/tenant" component = {ListTenantComponent}></Route>
                  <Route path = "/create" component= {CreateTenantComponent}></Route>
                  <Route path = "/view/:code" component= {ViewTenantComponent}></Route>
                </Switch>
              </div>
            <FooterComponent />
        </div>
      </Router> 
    </div>

  );
}

export default App;
