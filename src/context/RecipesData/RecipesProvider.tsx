import React from "react";
import RecipesContext, {initialRecipesData, RecipeData, Recipe} from "./index";
import { Credentials } from "../../constants/Credentials";

type Props = {
    
}

type State = RecipeData;

class RecipesProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialRecipesData,
            getRecipesList: this.getRecipesList
        };
        this.getRecipesList = this.getRecipesList.bind(this);
    }

    getRecipesList = () => {
        // console.log(Recipes)

        
        fetch(Credentials.SERVER_API_ENDPOINT + "recipes/topN/UserId=1/size=10", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
            /* .then(response => response._source) */
            .then((response: Array<Recipe>) => {
                /* if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                } */
                this.setState({
                    recipesList: response     
                })
                // console.log(response)
            })
        
        //console.log("after calling getRecipesList")
    }

    render() {
        
        return (
            <RecipesContext.Provider value={this.state}>
                {this.props.children}
            </RecipesContext.Provider>
        );
    }
}

export default RecipesProvider;