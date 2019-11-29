import React from "react";
import RecipesContext, {initialRecipesData, RecipeData, Recipe} from "./index";

type Props = {
    
}

type State = RecipeData;

class RecipesProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialRecipesData,
            setRecipesList: this.setRecipesList
        };
        this.setRecipesList = this.setRecipesList.bind(this);
    }

    setRecipesList = (Recipes: any) => {
        // console.log(Recipes)
        

        this.setState({
            recipesList: Recipes      
        })
        console.log("after calling setRecipesList")
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