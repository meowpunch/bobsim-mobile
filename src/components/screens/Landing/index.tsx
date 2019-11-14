import React, { Component }  from "react";
import {Button, Text, View, Image, ScrollView, Dimensions} from "react-native";
import {NavigationInjectedProps, withNavigation, NavigationEvents} from "react-navigation";
import {Item} from "../../../context/AppData";
import {styles} from "./styles";
import Assets from "../../../constants/Assets";
import {Credentials} from "../../../constants/Credentials";
import AddItem from "../../icons/AddItem";
import ItemComponent from "../../ItemComponent/."


type Props = NavigationInjectedProps & {
    container: Array<Item>,
    newContainer: Array<Item>,
}

type State = {
}

class Landing extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }
    


    /* static navigationOptions = {
        drawerLabel: "전체 보기",
        drawerIcon: () => (<Entypo name="grid" size={28} color="#e6e6e6"/>),
        
        headerTitle: "전체 보기",
        headerRight: HomeRHeader,
        headerLeft: HeaderLeft,
    } */
    


    _trigger = () => {

        fetch(Credentials.SERVER_API_ENDPOINT +  "3/findAll", {
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
                        
                        <View style={{backgroundColor:"#f2f2f2"}}>
                            
                            {/* <Button title={"Trigger API"} onPress={this._trigger}/> */}
                            {/* <Text style={styles.apiResult}>{this.state.buttonResponse}
                            </Text> */}
                            <NavigationEvents
                                onWillFocus={payload => {
                                    console.log("WTHWTHWTHWTH");
                                    
                                    console.log(this.props.newContainer)
                                }}
                            />
                            {
                                this.props.container.map((item:Item,key) => (
                                    <ItemComponent key={key} item={item}></ItemComponent>
                                ))
                            }{
                                this.props.newContainer.map((item,key) => (
                                    <ItemComponent key={key} item={item}></ItemComponent>
                                ))
                            }
         
                            <Text style={styles.apiResult}>
                                {
                                    this.props.container.map((item,key) => {
                                        <Text>{item.name}</Text>
                                    })
                                }
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores mollitia quisquam nihil, maiores accusantium, possimus quidem odit quam dicta suscipit, unde deserunt. Aut suscipit temporibus modi perferendis repellendus ullam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto incidunt nemo cumque quisquam amet iste, nam adipisci aspernatur labore quos impedit laborum consequatur deleniti repudiandae harum! Illo, eveniet nobis?
                            </Text>
                        </View>     
                    </ScrollView>
                    <AddItem navigation={this.props.navigation} ></AddItem>
                </View>
            </View>
        );
    }
}

export default withNavigation(Landing);
