import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import CaptureItems from "./index"
import NewItemContext from "../../../context/ItemData"




type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CaptureItemsHandler: React.FC<Props> = (props: Props) => {
    return (
            <NewItemContext.Consumer>   
                {({newItem, resetItem}) => {
                    return <CaptureItems
                        newItem={newItem}
                        resetItem={resetItem}
                    />
                }}
            </NewItemContext.Consumer>
    );
};


export default CaptureItems;