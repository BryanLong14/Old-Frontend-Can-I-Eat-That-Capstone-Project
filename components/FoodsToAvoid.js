import React, { Component } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios';

class FoodsToAvoid extends Component {
    componentWillMount(){
        axios.get('https://can-i-eat-that-api.herokuapp.com/api/foods/')
            .then(response => console.log("response from API call: ", response))
    }
    render(){
        return (
        <View>
            <Text>FoodsToAvoid</Text>
        </View>
        );
    }  
}

export default FoodsToAvoid;