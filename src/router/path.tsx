import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import SplashHandler from "../components/screens/Splash/context";
import {LandingHandler} from "../components/screens/Landing/context";
import CustomDrawerNavigator from "../components/CustomDrawerNavigator/context";


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
    Landing: {
        screen: CustomDrawerNavigator,
        /* navigationOptions: {
            header: null,
            gesturesEnabled: false,
        }, */
    }
});