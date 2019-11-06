import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import SplashHandler from "../components/screens/Splash/context";
import MenuHeader from "../components/header/MenuHeader"
import {LandingHandler} from "../components/screens/Landing/context";
import Landing from "../components/screens/Landing/index";
import SearchHeader from "../components/header/SerachHeader";
import CustomDrawerNavigator from "../components/CustomDrawerNavigator/index";
import CustomTabNavigator from "./src/components/CustomTabNavigator/index"
import Settings from "./src/views/Settings"


/* import Assets from "../constants/Assets";
import {Image, View} from "react-native";
import React from 'react'; */





export const AppNavigator   = createStackNavigator({
    Splash: {
        screen: SplashHandler,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        },
    },
    Landing: CustomDrawerNavigator,
});