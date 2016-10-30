'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HamburgerMenu extends Component {
  render() {
    return (
      <View>
        <Text>User Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});

module.exports = HamburgerMenu;
