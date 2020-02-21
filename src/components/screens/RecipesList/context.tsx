import React from "react";
import RecipesList from "./index";
import SomeDataContext from "../../../context/SomeData";
import { NavigationInjectedProps, NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import RecipesContext from "../../../context/RecipesData";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeRHeader from "../../HeaderRight/HomeHRIght";
import HeaderLeft from "../../HeaderLeft/index"

type Props = NavigationInjectedProps &{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


class RecipesListHandler extends React.Component<Props> {
    static navigationOptions = {
        /* drawerLabel: " 요리 추천",
        drawerIcon: () => (<MaterialCommunityIcons name="silverware-fork-knife" size={28} color="#f2f2f2"/>), */
        headerTitle: "추천 요리",
        headerRight: () => <HomeRHeader/>,
        headerLeft: () => <HeaderLeft/>,
    }
    

    render() {
        return (
            <SomeDataContext.Consumer>
                {({fieldA, fieldB, fieldC}) => {
                    return (
                        <RecipesContext.Consumer>
                            {({recipesList, getRecipesList}) => {
                                return <RecipesList
                                    recipesList = {recipesList}
                                    getRecipesList = {getRecipesList}
                                
                                />
                            }}
                        </RecipesContext.Consumer>
                    )
                }}
            </SomeDataContext.Consumer>
        );
    };
}

export default RecipesListHandler;
