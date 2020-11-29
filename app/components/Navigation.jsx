import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from "../screens/HomeScreen";
import {RecipesNavigator} from "../navigators/RecipesNavigator";
import {getFocusedRouteNameFromRoute} from "@react-navigation/core";
import MenuFormScreen from "../screens/MenuFormScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {WarehouseNavigator} from "../navigators/WarehouseNavigator";


const Tab = createBottomTabNavigator();

export const Navigation = () => {
    const getTabBarVisibility = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        const hideOnScreens = ['Recipe', 'Product'];
        if(hideOnScreens.indexOf(routeName) > -1) return false;
        return true;
    }

    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#ffffff"
                style={{backgroundColor: 'tomato'}}
                tabBarOptions={{ showLabel: false }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesome name="home" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="RecipesNavigator"
                    component={RecipesNavigator}
                    options={({route}) => ({
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="book-search" color={color} size={26}/>
                        ),
                    })}
                />
                <Tab.Screen
                    name="MenuFormScreen"
                    component={MenuFormScreen}
                    options={({route}) => ({
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarIcon: ({color}) => (
                            <MaterialIcons name="restaurant-menu" color={color} size={26}/>
                        ),
                    })}
                />
                <Tab.Screen
                    name="WarehouseNavigator"
                    component={WarehouseNavigator}
                    options={({route}) => ({
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="warehouse" color={color} size={26}/>
                        ),
                    })}
                />
                <Tab.Screen
                    name="AnalyticsScreen"
                    showLabel="false"
                    component={AnalyticsScreen}
                    options={({route}) => ({
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarIcon: ({color}) => (
                            <FontAwesome name="pie-chart" color={color} size={26}/>
                        ),
                    })}
                />
            </Tab.Navigator>
        </>
    )
}