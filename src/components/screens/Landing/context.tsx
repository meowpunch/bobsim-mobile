import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState,NavigationInjectedProps, withNavigation} from "react-navigation";
import HomeRHeader from "../../HeaderRight/HomeHRIght";
import HeaderLeft from "../../HeaderLeft/index"
import  {NavigationTabProp} from "react-navigation-tabs"
import AppDataContext from "../../../context/AppData";
import Landing from ".";

type Props = NavigationInjectedProps &{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


class LandingHandler extends React.Component<Props> {

    static navigationOptions = {
        /* drawerLabel: "전체 보기",
        drawerIcon: () => (<Entypo name="grid" size={28} color="#e6e6e6"/>), */
        
        headerTitle: "전체 보기",
        headerRight: HomeRHeader,
        headerLeft: HeaderLeft,
    }
    
    render() {
        return (
                <AppDataContext.Consumer> 
                    {({container,newContainer}) => {
                        return <Landing
                            container= {container}
                            newContainer= {newContainer}
                        />
                    }}
                </AppDataContext.Consumer>

        );
    }
};

export default LandingHandler;
