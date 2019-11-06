import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import SettingsHRight from "../../HeaderRight/SettingsHRight"
import { Ionicons } from "@expo/vector-icons";
import Assets from "../../../constants/Assets";
import {styles} from "./styles";

/* import CustomHeader from "../components/CustomHeader"; */

export default class AddItems extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.imageV}>
            <Image source={Assets.Image.logo} style={styles.logo}></Image>
          </View>
          
          <View style={styles.contentV}>
            <Text>Version: 0.000.0</Text>
            <Text>Update: 06.11.2019</Text>
          </View>
        </View>
      </View>
    );
  }
}
