import React, { Component } from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";

import { MKIconToggle, MKSwitch, MKRadioButton, MKCheckbox, MKColor, getTheme, setTheme } from "react-native-material-kit";

//// customize the material design theme
setTheme({
  primaryColor: MKColor.Purple,
  primaryColorRGB: MKColor.RGBPurple,
  accentColor: MKColor.Amber,
});


const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 3,
      
    },
    switch: {
      marginTop: 0
    },
    legendLabel: {
      textAlign: "center",
      color: "#666666",
      marginTop: 10,
      marginBottom: 20,
      fontSize: 12,
      fontWeight: "300"
    }
  })

class Toggles extends Component {
  constructor() {
    super();
    this.radioGroup = new MKRadioButton.Group();
  }

  _onChecked(event) {
    console.log(`icon toggle is checked? ${event.checked}`);
  }

  _onToggleClicked() {
    console.log("you clicked a toggle");
  }

  render() {
    return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        <View style={styles.row}>
            <MKSwitch checked={true} style={styles.switch} />
            <Text style={styles.legendLabel}>Remove from list</Text>
        </View>
          </ScrollView>
    );
  }
}

module.exports = Toggles;
