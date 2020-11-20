import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from "../screens/HomeScreen";
import {RecipesScreenContainer} from "../screens/RecipesScreenContainer";
import {getFocusedRouteNameFromRoute} from "@react-navigation/core";


const Tab = createBottomTabNavigator();

export const Navigation = () => {
    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        const hideOnScreens = ['Recipe'];
        if(hideOnScreens.indexOf(routeName) > -1) return false;
        return true;
    }

    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#ffffff"
                style={{backgroundColor: 'tomato'}}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="home" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="RecipesContainer"
                    component={RecipesScreenContainer}
                    options={({route}) => ({
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: 'Рецепты',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="book" color={color} size={26}/>
                        ),
                    })}
                />
            </Tab.Navigator>
        </>
    )
}