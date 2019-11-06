import React from "react";
import {Button, Text, View, Image, ScrollView, Dimensions} from "react-native";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import {styles} from "./styles";
import Assets from "../../../constants/Assets";
import {Creds} from "../../../constants/Credentials";
import AddItem from "../../icons/AddItem";
import HomeRHeader from "../../HeaderRight/HomeHRIght";
import { Entypo } from "@expo/vector-icons";
import { DrawerActions } from "react-navigation-drawer";
import HeaderLeft from "../../HeaderLeft/index"


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
            buttonResponse: '',
        }
    }
    


    static navigationOptions = {
        drawerLabel: "전체 보기",
        drawerIcon: () => (<Entypo name="grid" size={28} color="#e6e6e6"/>),
        
        headerTitle: "전체 보기",
        headerRight: HomeRHeader,
        headerLeft: HeaderLeft,
    }
    


    _trigger = () => {
        let bodyValue: SendMessageRequest = {userName: this.props.userName};
        fetch(Creds.SERVER_API_ENDPOINT +  "3/findAll", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }/* ,
            body: JSON.stringify({
                name: 'wans',
                expDate: '10/31',
                memo: 'fuck',
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

                    <ScrollView style={{backgroundColor:"black"}}>
                        <View style={{width:"100%", aspectRatio:2.5,  backgroundColor:"skyblue",}}>
                            <Image source={Assets.Image.advertise} style={styles.advertise}></Image>
                        </View>
                        
                        <View style={{backgroundColor:"pink"}}>
                            
                            {/* <Button title={"Trigger API"} onPress={this._trigger}/> */}
                            {/* <Text style={styles.apiResult}>{this.state.buttonResponse}
                            </Text> */}
                            <Text style={styles.apiResult}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores mollitia quisquam nihil, maiores accusantium, possimus quidem odit quam dicta suscipit, unde deserunt. Aut suscipit temporibus modi perferendis repellendus ullam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto incidunt nemo cumque quisquam amet iste, nam adipisci aspernatur labore quos impedit laborum consequatur deleniti repudiandae harum! Illo, eveniet nobis?
                            </Text>
                        </View>     
                    </ScrollView>
                    <AddItem></AddItem>
                    
                </View>
            </View>
        );
    }
}

export default withNavigation(Landing);
