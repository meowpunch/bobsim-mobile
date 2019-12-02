
import {View, Text, TouchableOpacity} from "react-native";
import {Item} from "../../context/ItemData"
import {NavigationInjectedProps} from "react-navigation"
import {MaterialCommunityIcons, Entypo} from "@expo/vector-icons";
import React from 'react';
import { Credentials } from "../../constants/Credentials";

type Props = {
    item: Item,
}

type State = {
    remain: number,
    light: number,  //0: red, 1: yello, 2: green
}



export default class ItemHeader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        /* console.log(this.props.item.expDate) */
        var s = this.props.item.expDate.split('-')
        /* console.log(s) */
        var expireDate:Date = new Date(parseInt(s[0]),parseInt(s[1])-1,parseInt(s[2]))
        var nowDate:Date = new Date()

        /* console.log(expireDate)
        console.log(nowDate) */

        var due = Math.round((expireDate.getTime() - nowDate.getTime()) / (1000 * 3600 * 24))
        var color = 0

        if(7>due && due>3) color = 1
        else if(due >= 7) color = 2
        

        this.state = {
            remain: due,
            light: color
        }
    }

    colorMap = ["#ff3333", "#ffff1a" , "#47d147"]

    /* componentDidMount () {
        alert("fuck")
    } */
    
    deleteButton () {
        fetch(Credentials.SERVER_API_ENDPOINT + "foods/deleteById/1/" + this.props.item.name , {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
          }).then(response => response.json())
            .then((response ) => {
                /* if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                } */ 
                /* alert(response.exitCode)
                console.log(response) */
                console.log("delete" + this.props.item.name )
            })
    }
    

    render() {
        return (    
            <View style={{padding:10, width:"100%", flexDirection:"row",backgroundColor:"transparent", alignItems:"center"}}>
                <View style={{ marginLeft:10, marginRight:12}}>
                    <MaterialCommunityIcons name="circle" color={this.colorMap[this.state.light]} size={14} ></MaterialCommunityIcons>
                </View>
                <Text>{this.state.remain}일 남은 식품</Text>

                <View style={{position:"absolute", padding: 2, borderRadius: 16 ,right: 18, aspectRatio:1, backgroundColor:"#b3b3b3"}}>
                    <TouchableOpacity style={{}} onPress={this.deleteButton}>
                        <Entypo name="cross" size={16} color="white" ></Entypo>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
