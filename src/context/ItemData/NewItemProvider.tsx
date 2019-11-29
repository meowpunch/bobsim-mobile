import React from "react";
import NewItemContext, {initialNewItem, ItemData} from "./index";

type Props = {}

type State = ItemData;



class NewItemProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialNewItem,
            resetItem: this.resetItem
        };
        this.resetItem = this.resetItem.bind(this);
    }

    resetItem = () => {
        
        this.setState({
            newItem: initialNewItem.newItem
        })
        console.log("after calling resetFuction")
        console.log(this.state.newItem)
    }

    render() {
        
        return (
            <NewItemContext.Provider value={this.state}>
                {this.props.children}
            </NewItemContext.Provider>
        );
    }
}

export default NewItemProvider;