import * as React from "react";

export type Item = {
    name: string;
    expDate: string;
    category: string;
    memo: string;
    uri: string; // image uri
};

export type ItemData = {
    newItem: Item
    resetItem: () => void
}

export const initialNewItem = {
    newItem: 
        {
            name: '',
            expDate: '',
            category: '',
            memo: 'default Item',
            uri: '',
        },
        
    resetItem: () => {}
};

const NewItemContext = React.createContext<ItemData>(initialNewItem);

export default NewItemContext;
