import React, {useEffect, useState} from "react";
import {ScrollView, TouchableHighlight, StyleSheet, View, TouchableOpacity, FlatList} from "react-native";
import {Avatar, Button, Card, Title, Paragraph, TouchableRipple} from "react-native-paper";
import axios from "axios";
import environment from "../../environment";
import DishCard from "../components/DishCard";

export const RecipesScreen = ({navigation}) => {
    const [dishes, setDishes] = useState([]);

    const getDishes = () => {
         axios.get(`${environment.BaseURL}/dishes`)
            .then(res => setDishes(res));
    }

    useEffect(() => {
        getDishes();
    }, [])

    return (
        <FlatList
            data={dishes.data}
            renderItem={({item}) => <DishCard item={item} navigation={navigation}/>}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
        />
    );
}
