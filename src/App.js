/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  
  state = {loggedIn: null};

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
    
  }

  renderContent() {
    // switch (this.state.loggedIn) {
    //   case true: 
    //     return (
    //       <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
    //     );
    //   case false:
    //     return <LoginForm />;
    //   default:
    //     return <Spinner size="Large" />;
    // }
    if (this.state.loggedIn) {
      return (
        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
      );
    } else if (this.state.loggedIn === false) {
      return <LoginForm />;
    }else{
      return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
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
