import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MKSwitch, MKButton, MKColor, MKTextField, setTheme } from "react-native-material-kit";
import axios from "axios";

const API = "https://can-i-eat-that-api.herokuapp.com/api/foods/";

const Textfield = MKTextField.textfield()
  .withPlaceholder("Add Food Here...")
  .withTextInputStyle({ flex: 1 })
  .build();

const ColoredRaisedButton = MKButton.coloredButton()
  .withText("Add Food to Avoid")
  .withTextStyle({
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  })
  .withOnPress(() => {
    console.log("Hi, you pressed the colored button!")
    // axios.create(API)
    // .catch(err => console.error(err));
  })
  .build();
  

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

  deleteItem = id => {
    console.log("deleted item", this.state.foods, API + id);
    axios
      .delete(API + id, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify
      })
      .catch(err => console.error(err))
      .then(this.initData());
  };

  addFoodsToAvoidButton = () => {
    return <ColoredRaisedButton style={styles.addFoodButton} />;
  };

  Textfield = () => {
    return <Textfield style={styles.textfield} />;
  }

  renderFoods = () => {
    return <View>
        {this.Textfield()}
        {this.addFoodsToAvoidButton()}
        {this.state.foods.map(food => <View key={food.id} style={styles.card}>
            <Text style={styles.foodsLabel}>{food.name.charAt(0).toUpperCase() + food.name.slice(1)}</Text>
            <View style={styles.toggleRow}>
              <Text style={styles.removeText}>Remove from list</Text>
              <MKSwitch checked={true} onPress={() => this.deleteItem(food.id)} />
            </View>
          </View>)}
      </View>;
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
    margin: 10,
    borderRadius: 20
  },
  raisedButtonStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  textfield: {
    height: 28,
    marginTop: 32
  },
  addFoodButton: {
    margin: 10,
    marginTop: 20,
    padding: 25,
    borderRadius: 20,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowColor: "black"
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  foodsLabel: {
    paddingTop: 10,
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
  primaryColor: MKColor.Indigo,
  primaryColorRGB: MKColor.RGBIndigo,
  accentColor: MKColor.Amber
});
