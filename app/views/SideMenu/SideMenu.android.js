'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class SideMenu extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>Side Menu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});

module.exports = SideMenu;
