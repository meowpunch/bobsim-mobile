import * as React from "react";
import {Item} from "../ItemData/index"

export type Profile = {
    id: number;         //primary key
    userId: string;
    age: number;
};



export type AppData = {
    profile: Profile,
    container: Array<Item>,
    newContainer: Array<Item>,

    getContainer: () => void,
    addItem: (item: any, id: number, image:any) => void
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
            expDate: '2019-11-17',
            category: '육류',
            memo: '12호',
            uri: 'https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foods/chicken.jpg',
        },
        {
            name: '감자',
            expDate: '2019-11-22',
            category: '야채',
            memo: '',
            uri: '', // https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foods/potato.jpg
        },
    ],
    newContainer: [
        {
            name: '돼지고기',
            expDate: '2022-1-23',
            category: '육류',
            memo: '냉동',
            uri: 'https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foods/pork.jpg',
        },
        {
            name: '양파',
            expDate: '2025-1-21',
            category: '야채',
            memo: '뉴비',
            uri: 'https://fm-foodpicturebucket.s3.ap-northeast-2.amazonaws.com/frontend/foods/onion.jpg',
        },  

    ],
    getContainer: () => {},
    addItem: () => {}
};

const AppDataContext = React.createContext<AppData>(initialAppData);

export default AppDataContext;