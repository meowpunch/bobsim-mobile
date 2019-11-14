import * as React from "react";
import AppDataContext, {initialAppData, AppData, Item} from "./index";

type Props = {}

type State = AppData;



class AppDataProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialAppData,
            addItem: this.addItem
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem = (Item: any) => {
        console.log('ADD')
        console.log(Item);
        alert("fuck")
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
