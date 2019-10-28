import {StyleSheet, TextStyle, ViewStyle} from "react-native";

const imageBackground: ViewStyle = {
    flex: 1,
};

const container: ViewStyle = {
    flex: 1,
};

const wrapper: ViewStyle = {
    flex: 1,
    marginTop: 33,
};

const header: ViewStyle = {
    flexDirection: "row",
    height: 60,
    backgroundColor: 'red',
    alignItems: 'center',
};

const main: ViewStyle = {
    flex: 10,
    backgroundColor: 'blue',
}

const advertise: ViewStyle = {
    flex: 3,
    backgroundColor: 'green',
}
const contents: ViewStyle = {
    flex: 11,
    backgroundColor: 'pink',
}

const title: TextStyle = {
    color: '#000',
    fontSize: 24,
    textAlign: 'center'
};

const value: TextStyle = {
    marginTop: 40,
    marginBottom: 50,
    color: '#000',
    fontSize: 16,
};

const apiResult: TextStyle = {
    marginTop: 40,
    color: '#000',
    fontSize: 16,
};

export const styles = StyleSheet.create({
    imageBackground,
    container,
    wrapper,
    title,
    value,
    apiResult,
    header,
    main,
    advertise,
    contents
});
