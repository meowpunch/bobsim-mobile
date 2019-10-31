import React from "react";
import {Button, Text, View, Image, ScrollView} from "react-native";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import {styles} from "./styles";
import Assets from "../../../constants/Assets";
import {Creds} from "../../../constants/Credentials";
import AddItem from "../../icons/AddItem";

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
        fetch(Creds.SERVER_API_ENDPOINT +  "register/handsome", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }/* ,
            body: JSON.stringify({
                userName: '홍길동'
              }) */
        }).then(response => response.json())
            .then((response ) => {
                /* if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                } */
                console.log(response)
                this.setState({buttonResponse: response.memo});
            })
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.main}>
                        <Image source={Assets.Image.advertise} style={styles.advertise}></Image>
                        <View style={styles.contents}>
                            
                            {/* <Button title={"Trigger API"} onPress={this._trigger}/> */}
                            <Text style={styles.apiResult}>{this.state.buttonResponse}
                            </Text>
                            {/* <Text style={styles.apiResult}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores mollitia quisquam nihil, maiores accusantium, possimus quidem odit quam dicta suscipit, unde deserunt. Aut suscipit temporibus modi perferendis repellendus ullam?
                            </Text> */}
                        </View>                        
                    </View>
                    <AddItem></AddItem>
                </View>
            </View>

        );
    }
}

export default withNavigation(Landing);
