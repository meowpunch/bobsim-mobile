import Assets from "../../constants/Assets";
import {Image, View} from "react-native";
import {styles} from "./styles";
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

/* class MenuHeader extends React.Component {
    render() {
        return (
            <View>
                <Ionicons
                    name="md-menu"
                    size={32}
                    color="green"
                    onPress={() => this.props.navigation.openDrawer()}
                />
            </View>0
        );
    }
} */

const MenuHeader = ({ navigation }) => (
    <View>
      <Ionicons.Button
        name="md-menu"
        size={32}
        color="black"
        backgroundColor="transparent"
        onPress={() => navigation.openDrawer()}
        iconStyle={styles.leftH}
      />
    </View>
  );

  export default MenuHeader;