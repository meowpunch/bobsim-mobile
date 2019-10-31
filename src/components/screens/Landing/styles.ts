import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from "react-native";

const imageBackground: ViewStyle = {
    flex: 1,
};

const container: ViewStyle = {
    flex: 1,
};

const wrapper: ViewStyle = {
    flex: 1,
};

/* const header: ViewStyle = {
    flexDirection: "row",
    height: 60,
    backgroundColor: 'red',
    alignItems: 'center',
};
 */
const main: ViewStyle = {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-start'
}


const contents: ViewStyle = {
    flex: 3,
    backgroundColor: 'pink',
}

const advertise: ImageStyle = {
    flex:1,
    resizeMode: 'contain',
    width: '100%',
}

/* const title: TextStyle = {
    color: '#000',
    fontSize: 24,
    textAlign: 'center'
};

const value: TextStyle = {
    marginTop: 40,
    marginBottom: 50,
    color: '#000',
    fontSize: 16,
}; */

const apiResult: TextStyle = {
    flex: 1,
    marginTop: 40,
    color: '#000',
    fontSize: 50,
};

export const styles = StyleSheet.create({
    imageBackground,
    container,
    wrapper,
    /* title,
    value, */
    apiResult,
    /* header, */
    main,
    advertise,
    contents
});
