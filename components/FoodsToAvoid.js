import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import axios from 'axios';
import Toggles from './Toggles'
const API = "https://can-i-eat-that-api.herokuapp.com/api/foods/";


class FoodsToAvoid extends Component {
  constructor(props) {
    super(props);
      this.state = {
        foods: []
      }
    }

  componentDidMount = () => {
    this.initData();
  };

  initData = () => {
    axios.get(API)
    .then(response => this.setState({ foods: response.data }))
    .catch(err => console.error(err));
  };

  renderFoods = () => {
    console.log("this.state: ", this.state);
    return this.state.foods.map(food => <View key={food.id} style={styles.container}>
        <Text>{food.name}</Text>
        <Toggles />
       </View>);
  };

  render() {
    return (
      <View>
        {this.renderFoods()}
      </View>
    );
  }
}

export default FoodsToAvoid;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2
    },
    foodsLabel : {
      fontSize: 20
  }
})