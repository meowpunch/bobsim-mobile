import Assets from "../../constants/Assets";
import { Image, View } from "react-native";
import { withNavigation } from "react-navigation"
import { styles } from "./styles";
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from 'react-navigation-hooks'
import { NavigationDrawerProp } from "react-navigation-drawer";

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

const HeaderLeft: React.FC = () => {
    const navigation = useNavigation();
    return (
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
}

export default withNavigation(HeaderLeft);