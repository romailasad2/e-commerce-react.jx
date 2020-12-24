import React, { Component } from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import Homepage from './Components/Pages/homepage/homepage.component';
import ShopPage from './Components/Pages/shop-page/shoppage.component';
import Header from './Components/Components/header/header.component';
import SignInAndSignUoPage from './Components/Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeAuth = null;

  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }else{
        this.setState({ currentUser: userAuth});
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }


  render(){
    return( 
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUoPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;