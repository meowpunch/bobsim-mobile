import {View,TextInput} from "react-native";
import React from 'react';
import { AntDesign } from "@expo/vector-icons";


/* class HeaderLeft extends React.Component {
    render() {
        return (
            <View>
                <Ionicons.Button
                    name="md-menu"
                    size={32}
                    color="black"
                    backgroundColor="transparent"
                    onPress={() => this.props.navigation.openDrawer()}
                    iconStyle={styles.leftH}
                />
            </View>
        );
    }
} */

/* class CUstomTextInput extends React.Component {

    render() {
        return (
            <View style={{flexDirection: 'row', width: "85%", borderColor: "#d9d9d9", paddingBottom: 16, paddingTop: 16, borderBottomWidth:1, alignItems: "center"}}>
              <AntDesign  name="calendar" size={28} color="#8c8c8c" style={{marginRight:32}}></AntDesign>
              <TextInput 
                keyboardType='numeric' 
                onChangeText={text => this.onChangeDate(text)}
                placeholder='2020.02.03'
                value={this.state.inputDate} 
                style={{flex:1, fontSize:26}}>
              </TextInput>
            </View>
        )
    }
}

export default CustomTextInput; 

icon 출처가 다르고
함수도 달라서 컴포넌트화 세부적으로 불가능
*/