import React from 'react';
import {createAppContainer} from "react-navigation";
import {AppNavigator} from "./src/router/path";
import MainNavigator from "./src/router/src/MainApp";
import SessionProvider from "./src/context/Session/SessionProvider";
import SomeDataProvider from "./src/context/SomeData/SomeDataProvider";
import AppDataProvider from "./src/context/AppData/AppDataProvider";
import NewItemProvider from './src/context/ItemData/NewItemProvider';
import RecipesProvider from './src/context/RecipesData/RecipesProvider';

const AppContainer = createAppContainer(AppNavigator);

const App: React.FC = () => {
    return (
        <RecipesProvider>
            <NewItemProvider>
                <AppDataProvider>
                    <SessionProvider>
                        <SomeDataProvider>
                            <AppContainer/>
                        </SomeDataProvider>
                    </SessionProvider>
                </AppDataProvider>
            </NewItemProvider>
        </RecipesProvider>
    );
};

export default App;
