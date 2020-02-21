import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import SplashHandler from "../components/screens/Splash/context";
import MainDrawerNavigator from "../components/Navigators/MainDrawerNavigator/context";


/* import Assets from "../constants/Assets";
import {Image, View} from "react-native";
import React from 'react'; */





export const AppNavigator   = createStackNavigator({
    Splash: {
        screen: SplashHandler,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false,
        },
    },
    Landing: {
        screen: MainDrawerNavigator,
        /* navigationOptions: {
            header: null,
            gesturesEnabled: false,
        }, */
    }
});