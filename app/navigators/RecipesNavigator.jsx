import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RecipesScreen} from "../screens/RecipesScreen";
import {RecipeScreen} from "../screens/RecipeScreen";

const Stack = createStackNavigator();

export const RecipesNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Recipes">
                <Stack.Screen name="Recipes" component={RecipesScreen}/>
                <Stack.Screen name="Recipe" component={RecipeScreen}/>
            </Stack.Navigator>
        </>
    );
};