import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";
import { styles } from "./styles";
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import { Geolocation } from "../../../context/Session";
import Assets from "../../../constants/Assets";
import { Credentials } from "../../../constants/Credentials";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Item } from "../../../context/ItemData";
import { Recipe } from "../../../context/RecipesData";
import { Notifications } from 'expo';
import Constants from "expo-constants";



type Props = NavigationInjectedProps & {
    container: Array<Item>,
    getContainer: () => void,
    recipesList: Array<Recipe>,
    getRecipesList: () => void,
}

type State = {
    expoPushToken: string,
    notification: any,
}

class Splash extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            expoPushToken: '',
            notification: {},
        }


        this.props.getContainer();
        this.props.getRecipesList();
        
        setTimeout(() => this.props.navigation.navigate('Landing'), 3000);
    }

    registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(
                Permissions.NOTIFICATIONS
            );
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Permissions.askAsync(
                    Permissions.NOTIFICATIONS
                );
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            let token = await Notifications.getExpoPushTokenAsync();
            console.log(token)
            this.setState({ expoPushToken: token });
        } else {
            alert('Must use physical device for Push Notifications');
        }
    }

    componentDidMount() {
        this.registerForPushNotificationsAsync();

        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),
        // this function will fire on the next tick after the app starts
        // with the notification data.
        /* this._notificationSubscription = Notifications.addListener(
            this._handleNotification
        ); */
    }

    _handleNotification = notification => {
        this.setState({ notification: notification });
    };






    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <Image source={Assets.Image.logo} style={styles.logo}></Image>
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigation(Splash);















/* this._getLocationAsync().then(() =>
            this._getPostalAddressAsync(this.state.location.coords.latitude, this.state.location.coords.longitude)
                .then(() => this.props.setGeolocation(this.state.location, this.state.postalAddress))
        ); */


/* _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        this.setState({
            errorMessage: 'Permission to access location was denied',
        });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
};

_getPostalAddressAsync = async (latitude: number, longitude: number) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        this.setState({
            errorMessage: 'Permission to access location was denied',
        });
    }
    let postalAddress = await Location.reverseGeocodeAsync({latitude: latitude, longitude: longitude});
    this.setState({ postalAddress: postalAddress[0] });
}; */