'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

import Router from './app/routes/Router.android.js'

class TipCalc extends Component {
  render() {
    return (
      <Router initialRoute={{name: "Dashboard"}} />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('TipCalc', () => TipCalc);
