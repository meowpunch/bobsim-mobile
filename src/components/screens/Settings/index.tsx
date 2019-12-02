import React, { Component } from "react";
import { View, Image, Text,TouchableOpacity } from "react-native";
import SettingsHRight from "../../HeaderRight/SettingsHRight"
import HeaderLeft from "../../HeaderLeft/index"
import { Ionicons } from "@expo/vector-icons";
import Assets from "../../../constants/Assets";
import {styles} from "./styles";
import { Credentials } from "../../../constants/Credentials";

/* import CustomHeader from "../components/CustomHeader"; */

export default class Settings extends Component {
  static navigationOptions = {
    drawerLabel: "설정",
    drawerIcon: () => (<Ionicons name="ios-settings" size={28} color="#f2f2f2"/>),

    headerTitle: "설정",
    headerRight: SettingsHRight,
    headerLeft: HeaderLeft,

  }

  deleteAll() {
    fetch(Credentials.SERVER_API_ENDPOINT + "foods/deleteAll/1", {
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
      })

    fetch(Credentials.SERVER_API_ENDPOINT + "images/deleteImageFolder/foods/1", {
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
      })
  }

  

  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.imageV}>
            <Image source={Assets.Image.logo} style={styles.logo}></Image>
          </View>
          
          <View style={styles.contentV}>
            <Text>Version: 0.000.0</Text>
            <Text>Update: 15.11.2019</Text>


            <View style={{marginTop:50, marginBottom:10}}>
              <Text>API TEST</Text>
            </View>

            
            <View style={{width:"75%", alignSelf:"center"}}>
              <TouchableOpacity style={{backgroundColor:"#ff8533", flexDirection: "row", alignItems:"center", justifyContent:"center", padding: 8}} onPress={this.deleteAll}>
                <Text style={{color: "white", fontSize:18, marginRight:8}}>
                  식자재 모두 삭제
                </Text>
              </TouchableOpacity>
            </View>

          </View>
          
          

        </View>

      </View>
    );
  }
}
