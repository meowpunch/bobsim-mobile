import React from "react";
import {Button, Text, View, Image} from "react-native";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import {styles} from "./styles";
import Assets from "../../../constants/Assets";
import {SERVER_API_ENDPOINT, SERVERLESS_API_ENDPOINT} from "../../../constants/Credentials";


type Props = NavigationInjectedProps & {
    fieldA: Array<string>,
    fieldB: boolean,
    fieldC: Date,
    userName: string,
    geolocation: Geolocation
}

type State = {
    buttonResponse: string
}

type SendMessageRequest = {
    userName: string
}

type SendMessageResponse = {
    output: string,
    exitCode: number,
    message: string
}

class Landing extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            buttonResponse: ''
        }
    }

    _trigger = () => {
        let bodyValue: SendMessageRequest = {userName: this.props.userName};
        fetch(SERVER_API_ENDPOINT +  "send-message", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(bodyValue)
        })
            .then(response => response.json())
            .then((response: SendMessageResponse) => {
                if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                }
                this.setState({buttonResponse: response.output});
            })
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <Image source={Assets.Image.menu} style={{left:20}}></Image>
                        <Text style={{left:28, fontSize:24}}>전체화면</Text>
                        <Image source={Assets.Image.adduser} style={{resizeMode:"contain", width:24}}></Image>
                        <Image source={Assets.Image.search} style={{right:316}}></Image>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.advertise}></View>
                        <View style={styles.contents}></View>
                    </View>
                </View>
            </View>
        );
    }
}

export default withNavigation(Landing);
