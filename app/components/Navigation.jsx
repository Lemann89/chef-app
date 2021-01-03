import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RecipesNavigator} from "../navigators/RecipesNavigator";
import MenuFormScreen from "../screens/MenuFormScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {WarehouseNavigator} from "../navigators/WarehouseNavigator";
import {HomeNavigator} from "../navigators/HomeNavigator";


const Tab = createBottomTabNavigator();

export const Navigation = () => {

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
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesome name="home" color={color} size={26}/>
                        ),
                        unmountOnBlur: true
                    }}
                />
                <Tab.Screen
                    name="RecipesNavigator"
                    component={RecipesNavigator}
                    options={() => ({
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="book-search" color={color} size={26}/>
                        ),
                    })}
                />
                <Tab.Screen
                    name="MenuFormScreen"
                    component={MenuFormScreen}
                    options={() => ({
                        tabBarIcon: ({color}) => (
                            <MaterialIcons name="restaurant-menu" color={color} size={26}/>
                        ),
                    })}
                />
                <Tab.Screen
                    name="WarehouseNavigator"
                    component={WarehouseNavigator}
                    options={() => ({
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="warehouse" color={color} size={26}/>
                        )
                    })}
                />
                <Tab.Screen
                    name="AnalyticsScreen"
                    showLabel="false"
                    component={AnalyticsScreen}
                    options={() => ({
                        tabBarIcon: ({color}) => (
                            <FontAwesome name="pie-chart" color={color} size={26}/>
                        ),
                    })}
                />
            </Tab.Navigator>
        </>
    )
}