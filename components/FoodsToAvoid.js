import React, { Component } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios';

class FoodsToAvoid extends Component {
  state = { foods: [] };

  componentWillMount() {
    axios.get("https://can-i-eat-that-api.herokuapp.com/api/foods/")
    .then(response => this.setState({ foods: response.data }));
  }

  renderFoods() {
    return this.state.foods.map(food => <Text key={food.name}>{food.name}</Text>);
  }

  render() {
    return (
      <View>
        {this.renderFoods()}
      </View>
    );
  }
}

export default FoodsToAvoid;