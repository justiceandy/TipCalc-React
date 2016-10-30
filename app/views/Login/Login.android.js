'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TextInput, TouchableHighlight } from 'react-native';

import Header from '../Header/Header.android.js'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  _navigate(name) {
    this.props.navigator.push({name: name})
  }
  render() {
    return (
      <View>
        <Text style={styles.red} onPress={ () => this._navigate('Main')}>Login Page</Text>
        <Text>Username:</Text>
        <TextInput
         style={styles.input}
         onChangeText={(text) => this.setState({username})}
         value={this.state.text}/>
        <Text>Password:</Text>
        <TextInput
         style={styles.input}
         onChangeText={(text) => this.setState({password})}
         value={this.state.text}/>
        <TouchableHighlight onPress={ () => this._navigate('Login')}>
          <Text style={styles.button}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {

  },
});

module.exports = Login;
