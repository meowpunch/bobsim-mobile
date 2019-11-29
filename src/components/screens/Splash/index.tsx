import React from "react";
import {ImageBackground, Text, View, Image} from "react-native";
import {styles} from "./styles";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import Assets from "../../../constants/Assets";
import {Credentials} from "../../../constants/Credentials";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Item} from "../../../context/ItemData"
import {Recipe} from "../../../context/RecipesData"

type Props = NavigationInjectedProps & {
    container: Array<Item>,
    setContainer: (Items: any) => void,
    recipesList: Array<Recipe>,
    setRecipesList: (Recipes: any) => void,
}

type State = {
    location: any,
    postalAddress: any,
    errorMessage: string
}

class Splash extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        
        
        
        let Items;
        fetch(Credentials.SERVER_API_ENDPOINT + "foods/findAll/1" , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
          }).then(response => response.json())
            .then((response ) => {
                /* if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                } */ 
                /* alert(response.exitCode)
                console.log(response) */
                console.log("get foods!!!!!!!!!!! in splash")
                this.props.setContainer(response)
                Items = response
            })


            
        fetch(Credentials.SERVER_API_ENDPOINT + "recipes/topN/UserId=1/size=10", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        }).then(response => response.json())
        /* .then(response => response._source) */
        .then((response) => {
            /* if (response.exitCode !== 200) {
                throw new Error('send-message API call failed with message: ' + response.message)
            } */ 
            this.props.setRecipesList(response)
            // console.log(response)
        })
        
        setTimeout(() => this.props.navigation.navigate('Landing'), 3000);
    }



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