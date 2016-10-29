'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Dashboard from './app/views/Dashboard/index.android.js'
import NewSale from './app/views/NewSale/index.android.js'
import ViewContainer from './app/views/ViewContainer.js'

class TipCalc extends Component {
  render() {
    return (
        <ViewContainer>
          <Dashboard></Dashboard>
        </ViewContainer>
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
