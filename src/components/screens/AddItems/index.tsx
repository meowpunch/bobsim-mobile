import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import {NavigationInjectedProps, NavigationEvents, withNavigation} from "react-navigation";
import { Ionicons, AntDesign, Foundation } from "@expo/vector-icons";
import {Item} from "../../../context/ItemData";


import {styles} from "./styles";
import {Credentials} from "../../../constants/Credentials";


type Props =  NavigationInjectedProps & {
  id: number,
  newContainer: Array<Item>,
  addItem: (item: any, id: number, image:any) => void,
  newItem: Item
}

type State = {
  /* tempUri: string */
  newItem: Item
}

/* type imageData = {
  uri: string,
  name: string,
  type: string
}
 */

class AddItems extends Component<Props, State /*, imageData */> {
  constructor(props) {
    super(props);
     
    console.log(props.newContainer)
    this.state = {
        /* inputTitle: '',
        inputDate: '',
        inputTag: '',
        inputNote: '',
        imageUri: '', */
        newItem: {
          name: '',
          expDate: '',
          category: '',
          memo: '',
          uri: '',
        },
        /* tempUri: '',
        tempItem: {
          name: '',
          expDate: '',
          category: '',
          memo: '',
          uri: '',
        } */
    }
  }   



  static navigationOptions = {

    title: "상품 추가",
    /* headerRight: HomeRHeader,
    headerLeft: HeaderLeft, */
  };

  onChangeTitle(text) {
    // this.props.newItem.name = text
    this.setState({
      newItem: {
        ...this.state.newItem,
        name: text
      }
    })
  }

  onChangeDate(text) {
    /* console.log(text) */
    
    var date = text.split('-')  
    console.log(date)

    switch(date.length) {
      case 1:
        if (date[0].length == 4) {
          if ( 2019<= parseInt(date[0]) && parseInt(date[0]) < 5000) text = date[0] + '-'
          else alert("적절하지 않는 입력값입니다.")
        }

        break;
      case 2:
        if ( 0 < parseInt(date[1]) && parseInt(date[1]) <13 ) {
          // text = date[0] + '-' + date[1] + '-'    //error 있음
        } else alert("적절하지 않는 입력값입니다.")
        
        break;
      case 3:
        if ( 0 < parseInt(date[2]) && parseInt(date[2]) <32 || date[2] == '') {
          
        } else alert("적절하지 않는 입력값입니다.")
        
        break;
    }

    this.setState({
      newItem: {
        ...this.state.newItem,
        expDate: text
      }
    })
    //this.props.newItem.expDate = text
    
  }

  onChangeTag(text) {
    if(text.length > 10){
      alert("10자리 이상 입력할 수 없습니다.")
      text = text.subtr(0,9)
    }
    
    //this.props.newItem.category = text
    this.setState({
      newItem: {
        ...this.state.newItem,
        category: text
      }
    })
  }

  onChangeNote(text) {
    //this.props.newItem.memo = text
    this.setState({
      newItem: {
        ...this.state.newItem,
        memo: text
      }
    })
  }

  pressButton() {
    if ((this.state.newItem.name).length == 0 || (this.state.newItem.expDate).split('-').length < 3) alert("옳바르지 않은 형식입니다.")
    else {

      
      // console.log(this.props.newItem)
      console.log(this.props.id)

      
      let photoItem = this.props.navigation.getParam('photoItem')
    
      this.props.addItem(this.state.newItem, this.props.id, photoItem)

      // console.log(this.props.newContainer)
      // this.props.navigation.navigate('ShowItems')
      setTimeout(() => this.props.navigation.navigate('ShowItems'), 3000);
    }
  }
    
  
  cameraButton() {
    this.props.navigation.navigate("CaptureItems")  
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>

          {/* <NavigationEvents
            onDidFocus={payload => {
              console.log('did focus', payload)
              console.log(this.props.navigation.state.params)
              console.log(JSON.stringify(this.props.navigation.state.params) == null)
              console.log(JSON.stringify(this.props.navigation.state.params) == undefined)
              console.log(this.props.navigation.state.params == null)
              console.log(this.props.navigation.state.params == undefined)

              console.log(JSON.stringify(this.props.navigation.getParam('photoItem')))
              console.log(this.props.navigation.getParam('photoItem').uri)

          }} 
          /> */}
          
          <View style={{padding:18, flexDirection: "row", backgroundColor:"white", marginTop: 10, marginBottom: 10, borderBottomWidth:1.5, borderColor:"#e6e6e6"}}> 
            <View style={{flex:3, aspectRatio:1, backgroundColor:"black", alignItems: "center", justifyContent:"center"}}>
              
              {!(this.props.navigation.state.params == null) && <Image source={{uri: this.props.navigation.getParam('photoItem').uri}} style={{zIndex: -1, width: "100%",  resizeMode:"cover", aspectRatio:1}}></Image>}

              <View style={{ zIndex:-1,position:"absolute",right:-13, bottom:-13, aspectRatio:1, borderRadius:32, backgroundColor:"white", padding:2, alignItems: "center", justifyContent:"center"}}>
                <View style={{borderRadius:32, padding:6,aspectRatio:1, backgroundColor:"black", alignItems: "center", justifyContent:"center"}}>
                  <TouchableOpacity style={{}} onPress={this.cameraButton.bind(this)}>
                    <Foundation name="camera" size={22} color="white"  ></Foundation>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{flex:10/* , backgroundColor:"#f4f4f4" */, flexDirection: "row",alignItems: "center", paddingLeft:18}}>
              <View style={{borderColor: "#d9d9d9", paddingBottom: 4, paddingTop: 4, borderBottomWidth:1, alignItems: "center"}}>
                <TextInput 
                  keyboardType='default' 
                  onChangeText={text => this.onChangeTitle(text)}
                  placeholder='식자재 이름을 입력하시오.'
                  style={{ fontSize:26}}>
                </TextInput>
              </View>
            </View>
          </View>

        

          <View style={{alignItems: "center", backgroundColor:"white",}}>
            <View style={{flexDirection: 'row', width: "85%", borderColor: "#d9d9d9", paddingBottom: 16, paddingTop: 16, borderBottomWidth:1, alignItems: "center"}}>
              <AntDesign  name="calendar" size={28} color="#8c8c8c" style={{marginRight:32}}></AntDesign>
              <TextInput 
                keyboardType='numeric' 
                onChangeText={text => this.onChangeDate(text)}
                placeholder='2020-2-3'
                value={this.state.newItem.expDate} 
                style={{flex:1, fontSize:26}}>
              </TextInput>
            </View>
            <View style={{flexDirection: 'row', width: "85%", borderColor: "#d9d9d9", paddingBottom: 16, paddingTop: 16,   borderBottomWidth:1, alignItems: "center"}}>
              <AntDesign  name="tago" size={28} color="#8c8c8c" style={{marginRight:32}}></AntDesign>
              <TextInput 
                keyboardType='default' 
                onChangeText={text => this.onChangeTag(text)} 
                placeholder='미분류'
                style={{flex:1, fontSize:26}}>
              </TextInput>
            </View>
            <View style={{flexDirection: 'row', width: "85%", borderColor: "#d9d9d9", paddingBottom: 16, paddingTop: 16,   borderBottomWidth:1, alignItems: "center"}}>
              <Foundation  name="clipboard-pencil" size={28} color="#8c8c8c" style={{marginRight:32}}></Foundation>
              <TextInput 
                keyboardType='default' 
                onChangeText={text => this.onChangeNote(text)} 
                placeholder='메모를 입력하시오.'
                style={{flex:1, fontSize:26}}>
              </TextInput>
            </View>

            <View style={{width:"85%", marginTop:16, paddingBottom: 16, paddingTop: 16,}}>
               <TouchableOpacity style={{backgroundColor:"#333333"}} onPress={this.pressButton.bind(this)}>
                <Text style={{color: "white", fontSize:20, padding: 16, alignSelf: "center"}}>
                    식자재 추가   
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    );
  }
}


export default withNavigation(AddItems);