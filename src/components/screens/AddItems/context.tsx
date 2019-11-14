import AddItems from "./index"
import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import  {NavigationTabProp} from "react-navigation-tabs"
import AppDataContext from "../../../context/AppData"


type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const AddItemsHandler: React.FC<Props> = (props: Props) => {
    return (
            <AppDataContext.Consumer>   
                {({profile, newContainer, addItem}) => {
                    return <AddItems
                        Id={profile.id}
                        newContainer={newContainer}
                        addItem={addItem}
                    />
                }}
            </AppDataContext.Consumer>
    
    );
};
