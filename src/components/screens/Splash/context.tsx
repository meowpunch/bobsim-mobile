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
                {({recipesList, getRecipesList}) => {
                    return (
                        <AppDataContext.Consumer> 
                            {({container, getContainer}) => {
                                return <Splash
                                    container= {container}
                                    getContainer = {getContainer}
                                    recipesList = {recipesList}
                                    getRecipesList = {getRecipesList}
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
