import React, { Component } from "react";
import { Button, Text, View, Image, ScrollView, Dimensions, RefreshControl } from "react-native";
import { NavigationInjectedProps, withNavigation, NavigationEvents } from "react-navigation";
import { Item } from "../../../context/ItemData";
import { styles } from "./styles";
import Assets from "../../../constants/Assets";
import { Credentials } from "../../../constants/Credentials";
import AddItem from "../../icons/AddItem";
import ItemComponent from "../../ItemComponent"
import ItemHeader from "../../ItemHeader"


type Props = NavigationInjectedProps & {
    container: Array<Item>,
    newContainer: Array<Item>,
    resetItem: () => void,
    getContainer: () => void,
}

type State = {
    refreshValue: boolean,
    refreshing: boolean,
    showContainer: Array<Item>,
}

class ShowItems extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            refreshValue: true,
            refreshing: false,
            showContainer: this.props.container,
        }
    }

    _onRefresh = () => {
        console.log(this.state.refreshing)
        console.log(this.state.refreshValue)
        this.props.getContainer();
        this.setState({ 
            refreshValue: !this.state.refreshValue,
            showContainer: this.props.container,
        });
        /* fetchData().then(() => {
            this.setState({ refreshing: false });
        }); */
    
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.wrapper}>

                    <ScrollView style={{ backgroundColor: "#f2f2f2" }}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <View style={{ width: "100%", aspectRatio: 2.5, backgroundColor: "skyblue", }}>
                            <Image source={Assets.Image.advertise} style={styles.advertise}></Image>
                        </View>

                        <View style={{ backgroundColor: "#f2f2f2" }}>


                            <NavigationEvents
                                onWillFocus={payload => {
                                    console.log("&&&&&&&&&&&&&&&&&&&ShowItems will focused&&&&&&&&&&&&&&&");
                                    /* console.log(this.props.newContainer) */
                                    this.props.getContainer();
                                    this.setState({ 
                                        refreshValue: !this.state.refreshValue,
                                        showContainer: this.props.container,
                                    });
                                }}
                            />
                            {
                                this.state.showContainer.map((item: Item, key) => (
                                    <View key={key} >
                                        <ItemHeader item={item}></ItemHeader>
                                        <ItemComponent item={item}></ItemComponent>
                                    </View>
                                ))
                            }

                            {/* {
                                this.props.newContainer.map((item,key) => (
                                    <View key={key} >
                                        <ItemHeader item={item}></ItemHeader>
                                        <ItemComponent item={item}></ItemComponent>
                                    </View>
                                ))
                            } */}

                            <Text style={styles.apiResult}>
                                {
                                    this.props.container.map((item, key) => {
                                        <Text>{item.name}</Text>
                                    })
                                }
                            </Text>
                        </View>
                    </ScrollView>
                    <AddItem navigation={this.props.navigation} ></AddItem>
                </View>
            </View>
        );
    }
}

export default withNavigation(ShowItems);
