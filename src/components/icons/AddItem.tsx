import {Image, View, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
// import {styles} from "./styles";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

/* class AddItem extends React.Component {

    imagePressed = () => {
        this.props.navigation.navigate('addItems')
    }

    render() {
        return (
            <View style={{position:"absolute", bottom:20, right:10}}>
                <Ionicons.Button 
                    name="ios-add-circle" 
                    size={84} 
                    backgroundColor="transparent" 
                    color='black' 
                    onPress={this.imagePressed} />
            </View>
          
        );  
    }
} */



const AddItem = ({ navigation }) => (
    <View style={{position:"absolute", bottom:20, right:10}}>
        <Ionicons.Button 
            name="ios-add-circle" 
            size={84} 
            backgroundColor="transparent" 
            color='black' 
            onPress={() => navigation.navigate('addItems')}
            />
    </View>
);


export default withNavigation(AddItem);