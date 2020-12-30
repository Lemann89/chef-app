import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "../screens/HomeScreen";
import {MenuDishScreen} from "../screens/MenuDishScreen";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Home"
                             >
                <Stack.Screen name="Home" title="av" component={HomeScreen} screenOptions={{
                    headerShown: false
                }}/>
                <Stack.Screen name="MenuDish" component={MenuDishScreen}/>
            </Stack.Navigator>
        </>
    );
};