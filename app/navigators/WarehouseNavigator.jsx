import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WarehouseScreen from "../screens/WarehouseScreen";
import ProductScreen from "../screens/ProductScreen";
import OrderScreen from "../screens/OrderScreen";
import {Button} from "react-native-paper";
import {StyleSheet} from "react-native";

const Stack = createStackNavigator();

export const WarehouseNavigator = (props) => {

    const {navigation} = props

    return (
        <>
            <Stack.Navigator initialRouteName="Warehouse">
                <Stack.Screen
                    name="Warehouse"
                    component={WarehouseScreen}
                    options={{
                        headerRight: () => (
                            <Button
                                style={styles.headerButton}
                                onPress={() => navigation.navigate('Order')}
                                mode="contained"
                                color="#007AFF"
                            >
                                Заказать
                            </Button>
                        ),
                        title: "Склад"
                    }}/>
                <Stack.Screen
                    name="Product"
                    component={ProductScreen}
                    options={{
                        title: "Продукт"
                    }}
                />
                <Stack.Screen
                    name="Order"
                    component={OrderScreen}
                    options={{
                        title: "Заказать продукты"
                    }}
                />
            </Stack.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        marginRight: 20
    }
})