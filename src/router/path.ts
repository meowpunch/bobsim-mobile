import {createStackNavigator} from "react-navigation-stack";
import SplashHandler from "../components/screens/Splash/context";
import MenuHeader from "../components/header/MenuHeader"
import {LandingHandler} from "../components/screens/Landing/context";
import SearchHeader from "../components/header/SerachHeader";

/* import Assets from "../constants/Assets";
import {Image, View} from "react-native";
import React from 'react'; */

/* class MenuHeader extends React.Component {
    render() {
        return (
            <Image
                source={Assets.Image.menu}
            />
        );
    }
}
 */
export const AppNavigator = createStackNavigator({
    Splash: {
        screen: SplashHandler,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    Landing: {
        screen: LandingHandler,
        navigationOptions: {
            headerTitle: "전체화면",
            headerLeft: MenuHeader,
            headerRight: SearchHeader,
        },
    }
});