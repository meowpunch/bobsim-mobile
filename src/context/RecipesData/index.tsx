import * as React from "react";


export type Ingredient = {
    리스트명: string,
    보유: number,
    식자재명: string,
    양: string,
}

// mapping to "_source"
export type Recipe = {
    uri: string,
    난이도: string,
    매치율: number,
    소요시간: string,
    양: string,
    재료: Array<Ingredient>,
    제목: string,
    조리방법: Array<string>,
    태그: Array<string>,
};



export type RecipeData = {
    recipesList: Array<Recipe>,
    setRecipesList: (Recipes: any) => void,
}

export const initialRecipesData = {
    recipesList: [
        {
            uri: "",
            난이도: "",
            소요시간: "",
            양: "",
            재료: [
                {
                    리스트명: "",
                    식자재명: "",
                    양: "",
                }
            ],
            제목: "Default Recipe",
            조리방법: [""],
            태그: [""],
        }
    ],
        
    setRecipesList: () => {},
};

const RecipesContext = React.createContext<RecipeData>(initialRecipesData);

export default RecipesContext;
