import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RecipesScreen} from "./RecipesScreen";
import {RecipeScreen} from "./RecipeScreen";

const Stack = createStackNavigator();

export const RecipesScreenContainer = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Recipes">
                <Stack.Screen name="Recipes" component={RecipesScreen}/>
                <Stack.Screen name="Recipe" component={RecipeScreen}/>
            </Stack.Navigator>
        </>
    );
};