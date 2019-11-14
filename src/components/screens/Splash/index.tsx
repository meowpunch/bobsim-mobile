import React from "react";
import {ImageBackground, Text, View, Image} from "react-native";
import {styles} from "./styles";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import Assets from "../../../constants/Assets";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

type Props = NavigationInjectedProps & {
    fieldA: Array<string>,
    fieldB: boolean,
    fieldC: Date,
    geolocation: Geolocation,
    setGeolocation: (location: any, postalAddress: any) => void
}

type State = {
    location: any,
    postalAddress: any,
    errorMessage: string
}

/* type Props =  NavigationInjectedProps & {
    
} */

class Splash extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        
        
        /* this._getLocationAsync().then(() =>
            this._getPostalAddressAsync(this.state.location.coords.latitude, this.state.location.coords.longitude)
                .then(() => this.props.setGeolocation(this.state.location, this.state.postalAddress))
        ); */

        

        setTimeout(() => this.props.navigation.navigate('Landing'), 3000);
    }

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