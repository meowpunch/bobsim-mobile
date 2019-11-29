import Assets from "../../constants/Assets";
import {Image, View} from "react-native";
import {withNavigation} from "react-navigation"
import {styles} from "./styles";
import React from 'react';
import { Ionicons } from "@expo/vector-icons";


/* class HeaderLeft extends React.Component {
    render() {
        return (
            <View>
                <Ionicons.Button
                    name="md-menu"
                    size={32}
                    color="black"
                    backgroundColor="transparent"
                    onPress={() => this.props.navigation.openDrawer()}
                    iconStyle={styles.leftH}
                />
            </View>
        );
    }
} */

const HeaderLeft = ({ navigation }) => (
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

export default withNavigation(HeaderLeft);