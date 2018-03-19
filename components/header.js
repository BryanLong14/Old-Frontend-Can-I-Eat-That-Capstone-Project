import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return <View>
        <Text style={styles.header}>Can I Eat That?</Text>
      </View>;
}

const styles = StyleSheet.create({
  header: {
       backgroundColor: "#F8F8F8",
       fontSize: 40
  }
});

export default Header;