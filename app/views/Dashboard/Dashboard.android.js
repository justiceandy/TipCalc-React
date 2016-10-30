'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';
import _ from 'lodash'

import Header from '../Header/Header.android.js'
import DashboardItem from '../DashboardItem/DashboardItem.android.js'
import SideMenu from '../SideMenu/SideMenu.android.js'

/* Import User Data from Json Format until Firebase Implemented */
import UserData from '../../services/UserData.js'

let state = UserData;

class Dashboard extends Component {
  _navigate(name) {
    this.props.navigator.push({name: name})
 }
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}></Header>
        <View style={styles.dashButtons}>
          <View style={styles.diContainer}>
            <DashboardItem style={styles.diItem}></DashboardItem>
            <DashboardItem style={styles.diItem}></DashboardItem>
            <DashboardItem style={styles.diItem}></DashboardItem>
            <DashboardItem style={styles.diItem}></DashboardItem>
            <DashboardItem style={styles.diItem}></DashboardItem>
            <DashboardItem style={styles.diItem}></DashboardItem>
            <DashboardItem style={styles.diItem}></DashboardItem>
            <DashboardItem style={styles.diItem}></DashboardItem>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableHighlight onPress={ () => this._navigate('hours') }>
            <View style={styles.biContainer}>
              <Text>Bottom</Text>
              <Text>Bottom</Text>
              <Text>Bottom</Text>
              <Text>Bottom</Text>
              <Text>Bottom</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bottomContainer:{
    flex: 1
  },
  dashButtons: {
    flex: 2,
    padding:20,
    flexWrap: "wrap",
    alignItems: "center"
  },
  header:{
    flex: 1,
  },
  container: {
    flex: 4,
    alignItems: 'stretch'
  },
  diContainer: {
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "stretch",
    flexDirection: "row"
  },
  diItem: {
    flexGrow: 1,
    backgroundColor: "dodgerblue",
    color: 'red',
  },
});

module.exports = Dashboard;
