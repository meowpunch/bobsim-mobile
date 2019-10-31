import Assets from "../../constants/Assets";
import {Image, View} from "react-native";
import {styles} from "./styles";
import React from 'react';

class MenuHeader extends React.Component {
    render() {
        return (
            <Image
                source={Assets.Image.menu}
                style={styles.leftH}
            />
        );
    }
}

  export default MenuHeader;