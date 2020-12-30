import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import MenuDishCard from "../components/MenuDishCard";
import axios from "axios";
import environment from "../../environment";
import DishCard from "../components/DishCard";

export const HomeScreen = ({navigation}) => {

    const [menuDishes, setMenuDishes] = useState([]);

    useEffect(() => {
        axios.get(`${environment.BaseURL}/menu`)
            .then(res => setMenuDishes(res.data));
    })

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={menuDishes}
                    renderItem={({item}) => <MenuDishCard item={item} navigation={navigation}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
})