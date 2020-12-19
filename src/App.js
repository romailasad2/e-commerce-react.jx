import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './Components/Pages/homepage/homepage.component';
import ShopPage from './Components/Pages/shop-page/shoppage.component';


class App extends Component{
  render(){
    return(
      <div>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </div>
    )
  }
}

export default App;