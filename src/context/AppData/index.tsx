import * as React from "react";

export type Profile = {
    id: number;         //primary key
    userId: string;
    age: number;
};


export type Item = {
    name: string;
    expDate: string;
    category: string;
    memo: string;
    uri: string; // image uri
};



export type AppData = {
    profile: Profile,
    container: Array<Item>,
    newContainer: Array<Item>,
    addItem: (Item: any) => void
}

export const initialAppData = {
    profile: {
        id: 1,
        userId: 'meowpunch',
        age: 27,
    },
    container: [
        {
            name: '닭',
            expDate: '2020.1.3',
            category: '육류',
            memo: '12호',
            uri: 'https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foods/chicken.jpg',
        },
        {
            name: '감자',
            expDate: '2020.12.7',
            category: '야채',
            memo: '',
            uri: '', // https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foods/potato.jpg
        },
    ],
    newContainer: [
        {
            name: '돼지고기',
            expDate: '2020.1.23',
            category: '육류',
            memo: '뉴비',
            uri: 'https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foods/pork.jpg',
        },
        {
            name: '양파',
            expDate: '2020.1.23',
            category: '야채',
            memo: '뉴비',
            uri: 'https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foods/onion.jpg',
        },

    ],

    addItem: () => {}
};

const AppDataContext = React.createContext<AppData>(initialAppData);

export default AppDataContext;