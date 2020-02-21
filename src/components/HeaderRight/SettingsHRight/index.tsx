import { Image, View } from "react-native";
import { styles } from "./styles";
import React from 'react';
import { Feather } from "@expo/vector-icons";





const SettingsHRight: React.FC = () => {
  return (
    <View>
      <Feather.Button
        name="more-vertical"
        size={32}
        color="black"
        backgroundColor="transparent"
        onPress={() => alert("babebabe~")}
        iconStyle={styles.rightH}
      />
    </View >
  );
}

export default SettingsHRight;