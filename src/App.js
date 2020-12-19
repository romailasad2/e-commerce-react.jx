import React, { Component } from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import Homepage from './Components/Pages/homepage/homepage.component';
import ShopPage from './Components/Pages/shop-page/shoppage.component';
import Header from './Components/Components/header/header.component';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;