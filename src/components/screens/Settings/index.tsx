import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import SettingsHRight from "../../HeaderRight/SettingsHRight"
import HeaderLeft from "../../HeaderLeft/index"
import { Ionicons } from "@expo/vector-icons";
import Assets from "../../../constants/Assets";
import {styles} from "./styles";

/* import CustomHeader from "../components/CustomHeader"; */

export default class Settings extends Component {
  static navigationOptions = {
    drawerLabel: "설정",
    drawerIcon: () => (<Ionicons name="ios-settings" size={28} color="#f2f2f2"/>),

    headerTitle: "설정",
    headerRight: SettingsHRight,
    headerLeft: HeaderLeft,
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
          </View>
        </View>
      </View>
    );
  }
}
