'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';
import _ from 'lodash'

import DashboardItem from '../DashboardItem/index.android.js'
import Login from '../Login/index.android.js'
let state = {
      date: "10/29/16",
      service: 25,
      serviceCommision: 0.50,
      sales: 100,
      taxRate: 0.40,
      salesCommision: 0.40,
      tips: 25,
      tipAverage: 6,
      hours: {
        start: "14:30",
        end: "18:30"
      },
      dollarPerHour: 12.50,
      totalDailyRevenue: 250
};
class Dashboard extends Component {

 _navigate(name) {
  	this.props.navigator.push({
    	name: name
    })
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={ () => this._navigate('Login')}>
          <View>
            <DashboardItem text={'Total Sales'} value="{stats.sales}"></DashboardItem>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => this._navigate('DailySales')}>
          <View>
            <DashboardItem text={'Total Sales'} value="{stats.sales}"></DashboardItem>
          </View>
        </TouchableHighlight>
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
  red: {
    color: 'red',
  },
});

module.exports = Dashboard;
