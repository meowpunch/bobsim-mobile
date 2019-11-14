import React from "react";
import { View,Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Landing from "../screens/Landing/index"
import {AddItemsHandler} from "../screens/AddItems/context"
import CaptureItems from "../screens/CaptureItems/context"
/* import SearchHeader from "../header/SearchHeader" */



const CameraStackNavigator = createStackNavigator(
  {
    AddItems: AddItemsHandler,


    CaptureItems: CaptureItems
  },
  {
    initialRouteName: "AddItems",
  }
  
  /* {
    navigationOptions:{
      header: null,
    }
  } */
);



export default CameraStackNavigator;
