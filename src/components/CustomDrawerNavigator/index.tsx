import React from "react";
import { View,Button } from "react-native";
import { createDrawerNavigator, DrawerItems, DrawerActions} from "react-navigation-drawer";
import {getActiveChildNavigationOptions} from "react-navigation";
import Landing from "../screens/Landing/index"
import Settings from "../screens/Settings/Settings"
import MenuHeader from "../header/MenuHeader"
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";


const content = props => (
  <View style={[styles.container]}>
    <DrawerItems
      activeBackgroundColor={"#4d4d4d"}
      activeTintColor={"white"}
      inactiveTintColor={"white"}
      /* iconContainerStyle={styles.icons} */
      {...props}
    />
  </View>
);

const CustomDrawerNavigator = createDrawerNavigator({
  
    Home: {
      screen: Landing,
      navigationOptions: {
        title: "전체 보기",
        drawerLabel: "전체 보기!",
        /* headerRight: "fuck", */
      }
    },


    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "설정",
      }
    },

    
    
  },
  {
    navigationOptions: ({ navigation, screenProps }) => ({
      // you can put fallback values before here, eg: a default tabBarLabel
      ...getActiveChildNavigationOptions(navigation, screenProps),

      // put other navigationOptions that you don't want the active child to
      headerLeft: () => (<MenuHeader navigation={navigation}/>),
      // be able to override here!
    }),
    contentComponent: content
  },



);



export default CustomDrawerNavigator;
