import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from "react-native";

const imageBackground: ViewStyle = {
    flex: 1,
};

const logo: ImageStyle = {
    resizeMode: "contain",
    width: '75%',

};

const container: ViewStyle = {
    flex: 1,
};

const wrapper: ViewStyle = {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
};

const title: TextStyle = {
    color: '#fff',
    fontSize: 48,
    marginBottom: 20
};

const subtitle: TextStyle = {
    color: '#fff',
    fontSize: 32,
    textAlign: 'center'
};

const value: TextStyle = {
    marginTop: 20,
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
};

export const styles = StyleSheet.create({
    imageBackground,
    logo,
    container,
    wrapper,
    title,
    subtitle,
    value
});
