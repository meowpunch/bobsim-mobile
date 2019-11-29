import * as React from "react";
import AppDataContext, {initialAppData, AppData} from "./index";
import {Item} from "../ItemData"

type Props = {}

type State = AppData;



class AppDataProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialAppData,
            addItem: this.addItem,
            setContainer: this.setContainer
        };
        this.setContainer = this.setContainer.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    setContainer = (Items: any) => {
        console.log(Items)
        //alert("GET FOODS ITEMS")
        this.setState({
            container: Items
        })
    }

    addItem = (Item: any) => {
        
        console.log("********************addItem***************************")
        console.log(Item)
        this.setState({
            newContainer: [...this.state.newContainer, Item]
        })
    };

    render() {
        return (
            <AppDataContext.Provider value={this.state}>
                {this.props.children}
            </AppDataContext.Provider>
        );
    }
}

export default AppDataProvider;
