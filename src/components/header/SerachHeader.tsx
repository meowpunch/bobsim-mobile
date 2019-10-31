import Assets from "../../constants/Assets";
import {Image, View} from "react-native";
import {styles} from "./styles";
import React from 'react';

class SearchHeader extends React.Component {
    render() {
        return (
            <Image
                source={Assets.Image.search}
                style={styles.rightH}
            />
        );
    }
}

  export default SearchHeader;