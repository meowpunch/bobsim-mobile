import React from "react";
import Splash from "./index";
import RecipesContext from "../../../context/RecipesData";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import AppDataContext from "../../../context/AppData";

type Props = {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

class SplashHandler extends React.Component<Props> {

    render() {
        return (
            <RecipesContext.Consumer>
                {({recipesList, setRecipesList}) => {
                    return (
                        <AppDataContext.Consumer> 
                            {({container, setContainer}) => {
                                return <Splash
                                    container= {container}
                                    setContainer = {setContainer}
                                    recipesList = {recipesList}
                                    setRecipesList = {setRecipesList}
                                />
                            }}
                        </AppDataContext.Consumer>
                    )
                }}
            </RecipesContext.Consumer>
        );
    };
}

export default SplashHandler;
