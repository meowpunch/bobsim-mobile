import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import CameraStackNavigator from "../CameraStackNavigator"
import LandingHandler from "../screens/Landing/context"
import {AddItemsHandler} from "../screens/AddItems/context"
import CaptureItems from "../screens/CaptureItems/context"
/* import SearchHeader from "../header/SearchHeader" */
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
  


const CustomStackNavigator = createStackNavigator(
  {
    Home: LandingHandler,

    AddItems: AddItemsHandler,

    CaptureItems: CaptureItems
  },
 /*  {
    initialRouteName: Home,
  }
   */
  {
    navigationOptions:{
      header: null,
    }
  }
);



export default CustomStackNavigator;
