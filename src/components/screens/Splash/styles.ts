import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from "react-native";

const background: ViewStyle = {
    flex: 1,
    backgroundColor: '#f4f4f4',
};

const logo : ImageStyle = {
    flex:1,
    resizeMode: 'contain',
    width: '83%',
    transform: [
        {translateY: -30},
    ],
};

const container: ViewStyle = {
    flex: 1,
};

const wrapper: ViewStyle = {
    flex:1,
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
    background,
    logo,
    container,
    wrapper,
    title,
    subtitle,
    value
});
