'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import _ from 'lodash'

import DashboardItem from '../DashboardItem/index.android.js'

const stats = {
  date: "10/29/16",
  service: 25,
  serviceCommision: 0.50,
  sales: 100,
  salesCommision: 0.40,
  tips: 25,
  tipAverage: 6,
  hours: {
    start: "14:30",
    end: "18:30"
  },
  dollarPerHour: 12.50,
  totalDailyRevenue: 250
}

class Dashboard extends Component {
  render() {
    return (
      <View>
        <DashboardItem text={'Total Sales'} value="{stats.sales}"></DashboardItem>
        <DashboardItem text={'Total Service'} value="{stats.service}">></DashboardItem>
        <DashboardItem text={'Total Tips'} value="{stats.tips}">></DashboardItem>
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
