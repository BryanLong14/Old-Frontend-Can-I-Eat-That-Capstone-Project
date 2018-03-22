import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MKSwitch, MKColor, setTheme } from "react-native-material-kit";
import axios from "axios";

const API = "https://can-i-eat-that-api.herokuapp.com/api/foods/";

class FoodsToAvoid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: []
    };
  }

  componentDidMount = () => {
    this.initData();
  };

  initData = () => {
    axios
      .get(API)
      .then(response => this.setState({ foods: response.data }))
      .catch(err => console.error(err));
  };

  deleteItem = (id) => {
    console.log("deleted item", this.state.foods, API + id);
    axios
      .delete(`${API + id}`, { headers: { "Content-Type": "application/json" }, body: JSON.stringify })
      .catch(err => console.error(err))
      .then(this.initData)
  };

  renderFoods = () => {
    console.log("this.state: ", this.state);
    return this.state.foods.map(food => <View key={food.id} style={styles.card}>
        <Text style={styles.foodsLabel}>{food.name.charAt(0).toUpperCase() + food.name.slice(1)}</Text>
        <View style={styles.toggleRow}>
          <Text style={styles.removeText}>Remove from list</Text>
          <MKSwitch checked={true} 
          onPress={() => this.deleteItem(food.id)} 
          />
        </View>
      </View>);
  };

  render() {
    return <View>{this.renderFoods()}</View>;
  }
}

export default FoodsToAvoid;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 5,
    borderRadius: 20,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  foodsLabel: {
    paddingTop: 15,
    fontSize: 20,
    textAlign: "center"
  },
  removeText: {
    textAlign: "center",
    color: "#666666",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
    fontWeight: "300"
  }
});

//// customize the material design theme
setTheme({
  primaryColor: MKColor.Purple,
  primaryColorRGB: MKColor.RGBPurple,
  accentColor: MKColor.Amber
});
