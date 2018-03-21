import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/Header';
import FoodsToAvoid from './components/FoodsToAvoid';

export default class App extends Component{
  render() {
    return <View>
        <Header headerText="Can I Eat That?" />
        <FoodsToAvoid />
      </View>
      }
}
