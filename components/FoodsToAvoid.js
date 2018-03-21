import React, { Component } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios';
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
    return this.state.foods.map(food => 
    <Text key={food.name}>{food.name}</Text>)
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
