import Assets from "../../constants/Assets";
import {Image, View, TouchableOpacity} from "react-native";
// import {styles} from "./styles";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

class AddItem extends React.Component {

    imagePressed = () => {
        alert("hi")
    }

    render() {
        return (
            <Ionicons.Button name="ios-add-circle" size={84} color='black' onPress={this.imagePressed}/>
        );
    }
}

export default AddItem;