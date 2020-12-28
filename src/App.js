import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Homepage from './Components/Pages/homepage/homepage.component';
import ShopPage from './Components/Pages/shop-page/shoppage.component';
import Header from './Components/Components/header/header.component';
import SignInAndSignUoPage from './Components/Pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component{

  unsubscribeAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
      }else{
        setCurrentUser( userAuth );
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }
 

  render(){
    return( 
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUoPage}/>
        </Switch>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);