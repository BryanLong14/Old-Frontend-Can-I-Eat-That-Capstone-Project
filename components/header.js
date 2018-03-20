import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return <View>
        <Text style={styles.header}>{props.headerText}</Text>
      </View>;
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    backgroundColor: "#F8F8F8",
    fontSize: 40,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  }
});

export default Header;