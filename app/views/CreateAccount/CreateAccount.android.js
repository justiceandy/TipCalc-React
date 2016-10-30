'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class CreateAccount extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>This is a Dashboard Item</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});

module.exports = CreateAccount;
