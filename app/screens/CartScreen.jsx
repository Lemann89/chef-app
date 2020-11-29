import React from 'react';
import {Button, Text} from "react-native-paper";

const CartScreen = props => {
    const {navigation} = props
    return (
        <>
            <Text>
                Это корзина, детка!
            </Text>
            <Button
                mode="contained"
                onPress={() => {navigation.navigate('Success')}}
            >
                Оплатить
            </Button>
        </>
    );
};


export default CartScreen;