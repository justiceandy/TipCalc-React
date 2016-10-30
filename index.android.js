'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

import Dashboard from './app/views/Dashboard/index.android.js'
import NewSale from './app/views/NewSale/index.android.js'
import ViewContainer from './app/views/ViewContainer.js'
import Login from './app/views/Login/index.android.js'
import ResetPassword from './app/views/ResetPassword/index.android.js'


class TipCalc extends Component {
  render() {
    return (
      <Navigator
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
         />
    );
  }

}


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('TipCalc', () => TipCalc);
