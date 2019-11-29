import React from "react";
import { View,Button } from "react-native";
import { createDrawerNavigator, DrawerItems, DrawerActions} from "react-navigation-drawer";
import {getActiveChildNavigationOptions} from "react-navigation";
import Landing from "../../screens/ShowItems/index"
import Settings from "../../screens/Settings"
import RecipesHandler from "../../screens/RecipesList/context"
import MenuHeader from "../../HeaderLeft"
/* import SearchHeader from "../header/SearchHeader" */
import styles from "./styles";1
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import ItemsStackNavigator from "../ItemsStackNavigator/context"

import HomeRHeader from "../../HeaderRight/HomeHRIght";
import HeaderLeft from "../../HeaderLeft/index"
import RecipesStackNavigator from "../RecipesStackNavigator";


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

const MainDrawerNavigator = createDrawerNavigator({
  
    Home: {
      screen: ItemsStackNavigator,
      navigationOptions: {
        
        drawerLabel: "냉장고",
        drawerIcon: () => (<MaterialCommunityIcons name="fridge" size={28} color="#e6e6e6"/>),
      }
    },

    Recipes: {
      screen: RecipesStackNavigator,
      navigationOptions: {
        
        drawerLabel: " 요리 추천",
        drawerIcon: () => (<MaterialCommunityIcons name="silverware-fork-knife" size={28} color="#f2f2f2"/>),
      }
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



export default MainDrawerNavigator;
