import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MKProgress } from "react-native-material-kit";

import Header from './components/Header';
import FoodsToAvoid from './components/FoodsToAvoid';

export default class App extends Component{
  render() {
    return <View>
        <Header headerText="Foods to Avoid" />
        {/* How do you say: "If this component has not loaded..." */}
        {/* <FoodsToAvoid />  */}
        ? <FoodsToAvoid /> : <Text style={styles.progress}>Loading</Text>
        <MKProgress.Indeterminate style={styles.progress} />
      </View>;
      }
}

const styles = StyleSheet.create({
    progress: {
      flex: 1,
      width: 150,
      alignItems: "center",
      justifyContent: "center"
    }
  })