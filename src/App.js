/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBGUJCMSRkdNcy1_rj-MT58BjrzMu4A1WQ",
        authDomain: "authentication-7a666.firebaseapp.com",
        databaseURL: "https://authentication-7a666.firebaseio.com",
        projectId: "authentication-7a666",
        storageBucket: "authentication-7a666.appspot.com",
        messagingSenderId: "271282939095"
      }
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
