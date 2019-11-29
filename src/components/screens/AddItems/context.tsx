import AddItems from "./index"
import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import AppDataContext from "../../../context/AppData"
import NewItemContext from "../../../context/ItemData";


type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const AddItemsHandler: React.FC<Props> = (props: Props) => {
    return (
        <NewItemContext.Consumer>
            {({newItem}) => {
                return(
                    <AppDataContext.Consumer>   
                        {({profile, newContainer, addItem}) => {
                            return <AddItems
                                Id={profile.id}
                                newContainer={newContainer}
                                addItem={addItem}
                                newItem={newItem}
                            />
                        }}
                    </AppDataContext.Consumer>
                )
            }}
        </NewItemContext.Consumer>
    );
};
