import React, {useEffect, useState} from "react";
import {FlatList, ScrollView, Text, View, VirtualizedList} from 'react-native';
import {Card, Title, Paragraph, DataTable} from "react-native-paper";
import {StyleSheet} from "react-native";
import axios from "axios";
import environment from "../../environment";
import IngredientRow from "../components/IngredientRow";
import VirtualizedView from "../components/VirtualizedView";

export const RecipeScreen = (props) => {
    const {route} = props
    const dishId = route.params
    const [dish, setDish] = useState({});
    const [dishParams, setDishParams] = useState({});

    const getDish = () => {
        axios.get(`${environment.BaseURL}/dishes/${dishId}`)
            .then(res => setDish(res.data))
    }

    const getDishParams = () => {
        axios.get(`${environment.BaseURL}/dishes/${dishId}/params`)
            .then(res => setDishParams(res.data))
    }

    useEffect(() => {
        getDish();
        getDishParams();
    }, []);

    return (
        <VirtualizedView>
            <Card>
                <Card.Cover source={{uri: dish.imageURL}}/>
            </Card>
            <View style={styles.container}>
                <Title style={styles.title}>{dish.name}</Title>
                <View style={styles.row}>
                    <Text style={styles.subheading}>Цена : </Text>
                    <Text style={styles.text}>{dishParams.price} грн</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.subheading}>Кол-во порций : </Text>
                    <Text style={styles.text}>{dish.recipe?.portions}</Text>
                </View>
                <Text style={styles.subheading}>Ингредиенты :</Text>
                <DataTable style={styles.table}>
                    <FlatList
                        data={dish.recipe?.ingredients}
                        renderItem={({item}) => <IngredientRow item={item} /> }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </DataTable>
                <Text style={styles.subheading}>Пищевая ценность :</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Жиры</DataTable.Title>
                        <DataTable.Title style={styles.tableLeft}>Белки</DataTable.Title>
                        <DataTable.Title numeric>Углеводы</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>{dishParams.fats}</DataTable.Cell>
                        <DataTable.Cell style={styles.tableLeft}>{dishParams.proteins}</DataTable.Cell>
                        <DataTable.Cell numeric>{dishParams.carbohydrates}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
                <Text style={styles.subheading}>Рецепт :</Text>
                <Paragraph style={styles.text}>{dish.recipe?.recipe}</Paragraph>
            </View>
        </VirtualizedView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        paddingTop: 15,
        fontSize: 21,
        fontWeight: 'bold',
    },
    subheading: {
        paddingTop: 12,
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        paddingTop: 14,
        fontSize: 16
    },
    tableLeft: {
        paddingLeft: 50
    },
    row: {
        height: 40,
        alignItems: "center",
        flexDirection: "row"
    }
})