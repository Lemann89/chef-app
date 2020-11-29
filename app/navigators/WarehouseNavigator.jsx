import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WarehouseScreen from "../screens/WarehouseScreen";
import ProductScreen from "../screens/ProductScreen";
import OrderScreen from "../screens/OrderScreen";
import {Button} from "react-native-paper";
import CartScreen from "../screens/CartScreen";
import SuccessScreen from "../screens/SuccessScreen";

const Stack = createStackNavigator();

export const WarehouseNavigator = (props) => {
    const {navigation} = props
    return (
        <>
            <Stack.Navigator initialRouteName="Warehouse">
                <Stack.Screen name="Product" component={ProductScreen}/>
                <Stack.Screen
                    name="Warehouse"
                    component={WarehouseScreen}
                    options={{
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('Order')}
                            icon="clipboard-plus"
                            mode="contained"
                            color="#007AFF"
                        >
                            Order
                        </Button>
                    ),
                }}/>
                <Stack.Screen
                    name="Order"
                    component={OrderScreen}
                    options={{
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('Cart')}
                            icon="cart"
                            mode="contained"
                            color="#007AFF"
                        >
                            cart
                        </Button>
                    ),
                }}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
                <Stack.Screen
                    name="Success"
                    component={SuccessScreen}
                    options={{
                       headerShown: false
                    }}

                />
            </Stack.Navigator>
        </>
    );
};