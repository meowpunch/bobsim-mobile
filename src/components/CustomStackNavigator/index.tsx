import React from "react";
import { View,Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import {getActiveChildNavigationOptions} from "react-navigation";
import Landing from "../screens/Landing/index"
import AddItems from "../screens/AddItems/context"
import MenuHeader from "../HeaderLeft"
/* import SearchHeader from "../header/SearchHeader" */
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";



const CustomStackNavigator = createStackNavigator(
  {
    Home: Landing,


    AddItems: {
      screen: AddItems,
    },
  },
 /*  {
    initialRouteName: Home,
  }
   */
);



export default CustomStackNavigator;
