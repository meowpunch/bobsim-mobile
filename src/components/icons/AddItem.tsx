import {Image, View, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
// import {styles} from "./styles";
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

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
    <View style={{position:"absolute", padding:20, borderRadius:50,bottom:36, right:28, backgroundColor:"black"}}>
        <TouchableOpacity onPress={() => navigation.navigate('AddItems')}>
            <AntDesign 
                name="plus" 
                size={28} 
                color='white' 
            >
                
            </AntDesign>
        </TouchableOpacity>
    </View>
);


export default AddItem;