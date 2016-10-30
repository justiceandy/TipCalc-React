'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class DashboardItem extends Component {
  render() {
    return (
      <View style={styles.diContainer}>
        <Text style={styles.red}>This is a Dashboard Item</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  diContainer: {
    flexGrow: 0,
    alignSelf: "auto"
  }
});

module.exports = DashboardItem;
