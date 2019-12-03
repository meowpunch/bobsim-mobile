import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState,NavigationInjectedProps, withNavigation} from "react-navigation";
import HomeRHeader from "../../HeaderRight/HomeHRIght";
import HeaderLeft from "../../HeaderLeft/index"
import  {NavigationTabProp} from "react-navigation-tabs"
import AppDataContext from "../../../context/AppData";
import NewItemContext from "../../../context/ItemData";
import ShowItems from ".";

type Props = NavigationInjectedProps &{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


class ShowItemsHandler extends React.Component<Props> {

    static navigationOptions = {
        
        
        headerTitle: "냉장고",
        headerRight: HomeRHeader,
        headerLeft: HeaderLeft,
    }
    
    render() {
        return (
            <NewItemContext.Consumer>
                {({resetItem}) => {
                    return (
                        <AppDataContext.Consumer> 
                            {({container,newContainer,getContainer}) => {
                                return <ShowItems
                                    container= {container}
                                    newContainer= {newContainer}
                                    resetItem = {resetItem}
                                    getContainer = {getContainer}
                                />
                            }}
                        </AppDataContext.Consumer>
                    )
                }}
            </NewItemContext.Consumer>

        );
    }
};

export default ShowItemsHandler;
