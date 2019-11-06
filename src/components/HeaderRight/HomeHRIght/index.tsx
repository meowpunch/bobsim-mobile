import {Image, View} from "react-native";
import {styles} from "./styles";
import React from 'react';
import { Ionicons } from "@expo/vector-icons";





const HomeHRight = (
  <View>
    <Ionicons.Button
      name="md-search"
      size={32}
      color="black"
      backgroundColor="transparent"
      onPress={() => alert("babebabe~")}
      iconStyle={styles.rightH}
    />
  </View>
);

  
export default HomeHRight;