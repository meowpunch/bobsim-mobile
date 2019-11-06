import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from "react-native";

const container: ViewStyle = {
    flex: 1,
};

const wrapper: ViewStyle = {
    flex: 1,
};

const imageV: ViewStyle = {
    flex:1,
    alignItems: "center", 
    /* backgroundColor:"skyblue",  */
    padding:50
}

const contentV : ViewStyle ={
    flex:3,
    alignItems: "center",
    /* backgroundColor:"pink", */ 
    padding:30
} 



const logo : ImageStyle = {
    flex:1,
    resizeMode: 'contain',
    width: '80%',
}



export const styles = StyleSheet.create({
    container,
    wrapper,
    logo,
    imageV,
    contentV,
});
