import React, { Component } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import SettingsHRight from "../../HeaderRight/SettingsHRight"
import HeaderLeft from "../../HeaderLeft/index"
import { Ionicons,  MaterialCommunityIcons, SimpleLineIcons, AntDesign, FontAwesome, Foundation} from "@expo/vector-icons";
import Assets from "../../../constants/Assets";
import {styles} from "./styles";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import { Recipe, Ingredient } from "../../../context/RecipesData";
import RecipesProvider from "../../../context/RecipesData/RecipesProvider";

/* import CustomHeader from "../components/CustomHeader"; */

type Props = NavigationInjectedProps & {

}

type State = {
  recipe: Recipe
}

class DetailedRecipe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      recipe: props.navigation.getParam("recipe")
    }

    //console.log(props.navigation.getParam("recipe"))
  }

  static navigationOptions = {

    headerTitle: "요리 방법",
    headerRight: SettingsHRight,
    /* headerLeft: HeaderLeft, */
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <ScrollView style={{backgroundColor:"#f2f2f2"}}>

            <View style={{alignItems: "center"}}>
              <Image source={{uri: this.state.recipe.uri}} style={{width:"100%", aspectRatio:6/5, resizeMode:"cover"}}></Image>
              

              <View style={{alignSelf:"center",position:"absolute", bottom:-34, zIndex:10, backgroundColor:"white", width:68,aspectRatio:1,opacity:0.5, borderRadius:100}}></View>
              <Image style={{zIndex:15,alignSelf:"center",position:"absolute", bottom:-30,width:60, aspectRatio:1, resizeMode:"cover", borderRadius:100}} source={{uri: "https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/users/cat03.jpg"}} ></Image>
              

              <View style={{flexDirection:"row", alignItems:"center", position:"absolute", bottom:-32, right:24}}>
                <MaterialCommunityIcons name="alarm-light" color="gray" size={20} style={{marginRight:2}}></MaterialCommunityIcons>
                <Text>구독하기</Text>
              </View>
            </View>


            
            <View style={{alignItems:"center", paddingTop:40, marginBottom:12, backgroundColor:"white"}}>
              

              <Text>냥냥펀치</Text>
              <Text style={{textAlign:"center",alignItems:"center" ,margin:16, marginLeft:32, marginRight:32, fontWeight:"bold", fontSize:28}}>{this.state.recipe.제목}</Text>
            
              <View style={{flexDirection:"row"}}>
                <View style={{alignItems:"center", margin:18}}>
                  <SimpleLineIcons name="user" size={24} color="#8c8c8c" style={{marginBottom:2}}></SimpleLineIcons>
                  <Text>{this.state.recipe.양}</Text>
                </View>
                <View style={{alignItems:"center", margin:18}}>
                  <SimpleLineIcons name="clock" size={24} color="#8c8c8c" style={{marginBottom:2}}></SimpleLineIcons>
                  <Text>{this.state.recipe.소요시간}</Text>
                </View>
                <View style={{alignItems:"center", margin:18}}> 
                  <AntDesign name="staro" size={24} color="#8c8c8c" style={{marginBottom:2}}></AntDesign>
                  <Text>{this.state.recipe.난이도}</Text>
                </View>
              </View>
            </View>
            
            <View style={{padding:18,  marginBottom:12, backgroundColor:"white"}}>
              <View style={{flexDirection: "row"/* , marginBottom: 18 */}}>
                <Text style={{marginRight:6, fontSize: 16, fontWeight: "bold"}}>재료</Text> 
                <Text style={{fontSize: 16, fontStyle: "italic", color: "#b3b3b3"}}>ingredients</Text>
              </View>
              
              <View style={{padding:18}}>
                {
                  this.state.recipe.재료.map((ingredient:Ingredient,key) => (
                    
                    /* var color = ingredient.보유? "black": "red"; */
                    

                    <View key={key} style={{paddingBottom:6, paddingTop:6, flexDirection: "row", alignItems:"center", justifyContent:"space-between", borderColor:"#e6e6e6", borderBottomWidth:1}}>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        { ingredient.보유 ? <Text style={{marginRight: 6}}>{ingredient.식자재명}</Text> : <Text style={{marginRight: 6, color: "red"}}>{ingredient.식자재명}</Text>}
                        <View style={{borderColor:"#b3b3b3", borderRadius:100, borderWidth:1}}>
                          <MaterialCommunityIcons name="information-variant" size={12} color="#b3b3b3"></MaterialCommunityIcons>
                        </View>
                      </View>
                      <Text style={{color:"#b3b3b3"}}>{ingredient.양}</Text>
                    </View>
                  ))
                }
              </View>

              <View style={{width:"75%", alignSelf:"center"}}>
                <TouchableOpacity style={{backgroundColor:"#ff8533", flexDirection: "row", alignItems:"center", justifyContent:"center", padding: 8}} onPress={() => {alert("FRESH SCANNER")}}>
                  <Text style={{color: "white", fontSize:18, marginRight:8}}>
                    최저가 재료 사러가기  
                  </Text>
                  <FontAwesome name="shopping-basket" color="white" size={16}></FontAwesome>
                </TouchableOpacity>
              </View>
            </View>




            <View style={{padding:18, marginBottom:12, backgroundColor:"white"}}>
              <View style={{flexDirection: "row", justifyContent:"space-between", alignItems:"center"/*, marginBottom: 4 */}}>
                <View style={{flexDirection: "row"}}>
                  <Text style={{marginRight:6, fontSize: 16, fontWeight: "bold"}}>조리방법</Text> 
                  <Text style={{fontSize: 16, fontStyle: "italic", color: "#b3b3b3"}}>steps</Text>
                </View>
                <View style={{marginRight:8}}>
                  <Foundation name="sound" size={26} color="#b3b3b3"></Foundation>
                </View>
              </View>
              
              <View style={{padding:18}}>
                {
                  this.state.recipe.조리방법.map((step: string,key) => (
                    <View key={key} style={{paddingBottom:6, paddingTop:6}}>
                      <Text style={{lineHeight: 20}}>{key+1}. {step}</Text>
                    </View>
                  ))
                }
              </View>
              
            </View>
             

            <View style={{padding:18, marginBottom:12, backgroundColor:"white"}}>

              <View style={{flexDirection: "row", justifyContent:"space-between", alignItems:"center"/*, marginBottom: 4 */}}>
                <View style={{flexDirection: "row"}}>
                  <Text style={{marginRight:6, fontSize: 16, fontWeight: "bold"}}>후기</Text> 
                  <Text style={{fontSize: 16, fontStyle: "italic", color: "#b3b3b3"}}>reviews</Text>
                </View>
              </View>

              <View style={{padding:18}}>
                <Text>후기 없음</Text>
              </View>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}


export default withNavigation(DetailedRecipe);