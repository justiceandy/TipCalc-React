'use strict';
import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Dashboard from '../views/Dashboard/Dashboard.android.js'
import NewSale from '../views/NewSale/NewSale.android.js'
import ViewContainer from '../views/ViewContainer.android.js'
import Login from '../views/Login/Login.android.js'
import ResetPassword from '../views/ResetPassword/ResetPassword.android.js'

class Router extends Component {
  render() {
    return (
      <Navigator
           ref="appNavigator"
           initialRoute={{name: 'Main'}}
           renderScene={(route, navigator) => {
             switch(route.name){
               case "Main":
               return <Dashboard title={route.title} navigator={navigator} {...route.passProps} />
               case "Login":
               return <Login title={route.title} navigator={navigator} {...route.passProps} />
               case "ResetPassword":
               return <ResetPassword title={route.title} navigator={navigator} {...route.passProps} />
               case "CreateAccount":
               return <CreateAccount title={route.title} navigator={navigator} {...route.passProps} />
               case "NewSale":
               return <NewSale title={route.title} navigator={navigator} {...route.passProps} />
             }
           }}
            configureScene={(route) => ({
            ...route.sceneConfig || Navigator.SceneConfigs.FadeAndroid })} 
         />
    );
  }
}

module.exports = Router;
