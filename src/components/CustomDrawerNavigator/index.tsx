import React from "react";
import { View,Button } from "react-native";
import { createDrawerNavigator, DrawerItems, DrawerActions} from "react-navigation-drawer";
import {getActiveChildNavigationOptions} from "react-navigation";
import Landing from "../screens/Landing/index"
import Settings from "../screens/Settings/."
import MenuHeader from "../HeaderLeft"
/* import SearchHeader from "../header/SearchHeader" */
import styles from "./styles";1
import { Ionicons } from "@expo/vector-icons";
import CustomStackNavigator from "../CustomStackNavigator/context"


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
    },


    Settings: {
      screen: Settings,
    },

    
    
  },
  {
    navigationOptions: ({ navigation, screenProps }) => ({
      // you can put fallback values before here, eg: a default tabBarLabel
      ...getActiveChildNavigationOptions(navigation, screenProps),

      // put other navigationOptions that you don't want the active child to
      /* headerLeft: () => (<MenuHeader navigation={navigation}/>), */
      /* headerRight: () => (<SearchHeader navigation={navigation}/>), */
      // be able to override herddexszddde!
    }),
    contentComponent: content
  },



);



export default CustomDrawerNavigator;
