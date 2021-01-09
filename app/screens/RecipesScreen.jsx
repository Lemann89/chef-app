import React, {useEffect, useState} from "react";
import {ScrollView, TouchableHighlight, StyleSheet, View, TouchableOpacity, FlatList} from "react-native";
import {Avatar, Button, Card, Title, Paragraph, TouchableRipple, ActivityIndicator, Colors} from "react-native-paper";
import axios from "axios";
import environment from "../../environment";
import DishCard from "../components/DishCard";

export const RecipesScreen = ({navigation}) => {
    const [dishes, setDishes] = useState([]);

    const getDishes = () => {
        axios.get(`${environment.BaseURL}/dishes`)
            .then(res => setDishes(res.data));
    }

    useEffect(() => {
        getDishes();
    }, [])

    const compareByDishName = (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    return (
        <>
            {
                dishes.length ? (
                    <FlatList
                        data={dishes.sort(compareByDishName)}
                        renderItem={({item}) => <DishCard item={item} navigation={navigation}/>}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                    />
                ) : (<ActivityIndicator style={styles.pt70} color={Colors.blue500} size='large'/>)
            }
        </>
    );
}

const styles = StyleSheet.create({
    pt70: {
        paddingTop: 70
    }
})

