'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

import BackIcon from 'mdi-react/ArrowLeftBoldIcon';
import AccountIcon from 'mdi-react/AccountIcon';

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => this.props.navigator.pop() }>
            <Text>Header</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerLogo}>
          <Text>Header</Text>
        </View>
        <View style={styles.accountContainer}>
          <TouchableOpacity onPress={() => this.props.navigator.pop() }>
            <Text>Header</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerLogo: {

  },
  backCountainer: {

  },
  backIcon: {

  },
  accountIcon: {

  },
  accountContainer:{

  }
});

module.exports = Header;
