import Assets from "../../constants/Assets";
import {Image, View} from "react-native";
import {styles} from "./styles";
import React from 'react';
import { Ionicons } from "@expo/vector-icons";




/* const SearchHeader = ({ navigation }) => (
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
); */

const HeaderRIght = (
  <View>
    <Ionicons.Button
      name="md-search"
      size={32}
      color="black"
      backgroundColor="transparent"
      onPress={() => alert("search")}
      iconStyle={styles.rightH}
    />
  </View>
);

  
export default HeaderRight;