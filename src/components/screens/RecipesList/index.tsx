import React, { Component } from "react";
import { View, Image, Text, ScrollView, Modal, TouchableOpacity, RefreshControl} from "react-native";
import SettingsHRight from "../../HeaderRight/SettingsHRight"
import HeaderLeft from "../../HeaderLeft/index"
import { Ionicons, EvilIcons,AntDesign,FontAwesome } from "@expo/vector-icons";
import Assets from "../../../constants/Assets";
import {styles} from "./styles";
import {NavigationInjectedProps, withNavigation, NavigationEvents} from "react-navigation";
import {Credentials} from "../../../constants/Credentials";
import {Recipe} from "../../../context/RecipesData"
import { Row } from "react-native-easy-grid";




/* import CustomHeader from "../components/CustomHeader"; */

type Props = NavigationInjectedProps & {
  recipesList: Array<Recipe>,
  getRecipesList: () => void
}

type State = {
  isVisible: boolean,
  refreshValue: boolean,
  refreshing: boolean,
}



class RecipesList extends Component<Props,State> {
  constructor(props: Props) {
    super(props);

    this.state={
      isVisible: false,
      refreshValue: false,
      refreshing: false,
    }
  }

  componentDidMount () {
  }
  
  _onRefresh = () => {

    this.props.getRecipesList();
    this.setState({ refreshValue: !this.state.refreshValue});
    /* fetchData().then(() => {
        this.setState({ refreshing: false });
    }); */
  }

  recipePressed(recipe: Recipe) {
    this.props.navigation.navigate("DetailedRecipe", {
      recipe: recipe
    })
  }


  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.wrapper}>

          <ScrollView style={{backgroundColor:"black"}}
                refreshControl={
                  <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh}
                  />
              }
          > 
            
            <View style={{width:"100%", aspectRatio:2.5}}>
              <Image source={{uri: "https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foodapplianceAd3.jpg"}} style={{flex:1, resizeMode: 'cover', width: '100%',}}></Image>
            </View>
            <View style={{backgroundColor:"#f2f2f2", alignItems: "center"}}>
            
              {
                  this.props.recipesList.map((recipe:Recipe,key) => (
                      
                      <View key={key} style={{/* marginBottom:16, */ marginTop:12, backgroundColor:"#fffdfb"}}>
                        <View style={{paddingLeft:12, paddingRight:12, paddingTop:15, paddingBottom:15}}>
                          <View style={{ marginBottom:15, flexDirection:"row", alignItems:"center"}}>
                            <View style={{flex:1, marginRight:12, /* padding:1, borderColor: "black", borderWidth:1, borderRadius: 100, */ aspectRatio:1, alignItems:"center", justifyContent:"center"}}>
                              <Image style={{height:"100%", aspectRatio:1, resizeMode:"cover", borderRadius:100}} source={{uri: "https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/users/cat03.jpg"}}></Image>
                            </View>
                            <View style={{flex:11}}>
                              <Text style={{fontWeight:"bold", fontSize:16, marginBottom:8}}>{recipe.제목}</Text>
                              <View style={{flexDirection: "row", alignContent:"center" /*,  justifyContent:"space-between" */}}>
                                <Text style={{fontSize:12, color:"#666666", marginRight:10}}>소요시간: {recipe.소요시간}</Text>
                                <Text style={{fontSize:12, color:"#666666", marginRight:10}}>양: {recipe.양}</Text>
                                <TouchableOpacity onPress={() => {alert(recipe.매치율)}}>
                                  <Text style={{fontSize:12, color:"#666666", marginRight:10}}>재료: {Math.round(recipe.매치율 * 100)}%</Text>
                                </TouchableOpacity>
                                {/* <Text style={{position:"absolute", right:16 ,fontSize:12, color:"#666666"}}>재료: {Math.round(recipe.매치율 * 100)}%</Text>
                                <FontAwesome name="battery-3" style={{position:"absolute", right:16 ,fontSize:24, opacity: 0.3}}></FontAwesome> */}  
                              </View>
                            </View>
                          </View>
                          
                          
                          <View style={{flexDirection:"row", alignItems:"center", justifyContent: "space-between"}}>
                            <View style={{width:"60%",flexDirection:"row", alignItems:"center"}}>
                              { 
                                recipe.태그.slice(0,3).map((tag:any,key) => (
                                  <View key={key}>
                                    <Text>#{tag}</Text>
                                  </View>
                                ))
                              }
                            </View>

                            <View style={{position:"absolute", right:0, flexDirection:"row", alignItems:"center"}}>
                              <View style={{marginRight:12}}>
                                <EvilIcons name="heart" size={28} color="#bfbfbf"></EvilIcons>
                              </View>
                              <View style={{marginRight:12}}>
                                <EvilIcons name="share-apple" size={28} color="#bfbfbf"></EvilIcons>
                              </View>
                              <View>
                                <EvilIcons name="sc-youtube" size={28} color="#bfbfbf"></EvilIcons>
                              </View>
                            </View>
                          </View>
                        </View>


                        
                        <View>
                          <TouchableOpacity onPress={()=>this.recipePressed(recipe)}>
                            <Image source={{uri: recipe.uri}} style={{width: "100%",  resizeMode:"cover", aspectRatio:2}}></Image>
                          </TouchableOpacity>
                        </View>
                        
                        
                      </View>                                 
                  ))
              }
       
            </View>     
          </ScrollView>



          {/* <View style={this.state.isVisible? {position:"absolute", width:"100%", height:"100%", opacity:0.5, } : styles.imageV}>

          </View> */}

        </View>
      </View>
    );
  }
}


export default withNavigation(RecipesList);