import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import ShowItemsHandler from "../../screens/ShowItems/context"
import {AddItemsHandler} from "../../screens/AddItems/context"
import {CaptureItemsHandler} from "../../screens/CaptureItems/context"
/* import SearchHeader from "../header/SearchHeader" */
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import HomeRHeader from "../../HeaderRight/HomeHRIght";
import HeaderLeft from "../../HeaderLeft/index"
  


const ItemsStackNavigator = createStackNavigator(
  {
    ShowItems: ShowItemsHandler,

    AddItems: {
      screen: AddItemsHandler,
      navigationOptions: {
        title: "식품 추가"
      }
    },
    CaptureItems: CaptureItemsHandler
  },
 /*  {
    initialRouteName: Home,
  }
   */
  {
    navigationOptions:{
      /* headerTitle: "나의 냉장고",
      headerRight: HomeRHeader,
      headerLeft: HeaderLeft, */
      headerShown: false,
    }
  }
);



export default ItemsStackNavigator;
