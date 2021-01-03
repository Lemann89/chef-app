import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import environment from "../../environment";
import VirtualizedView from "../components/VirtualizedView";
import {Card, DataTable, Paragraph, Title} from "react-native-paper";
import MenuIngredientRow from "../components/MenuIngredientRow";


export const MenuDishScreen = (props) => {
    const {route} = props
    const menuDishId = route.params
    const [dishIngredients, setDishIngredients] = useState({});
    const [dishParams, setDishParams] = useState({});

    const getDishIngredients = () => {
        axios.get(`${environment.BaseURL}/menu/${menuDishId}/ingredients`)
            .then(res => setDishIngredients(res?.data))
    }

    const getDishParams = () => {
        axios.get(`${environment.BaseURL}/menu/${menuDishId}/params`)
            .then(res => setDishParams(res?.data))
    }

    useEffect(() => {
        getDishIngredients();
        getDishParams();
    }, []);

    return (
        <VirtualizedView>
            <Card>
                <Card.Cover source={{uri: dishParams.image}}/>
            </Card>
            <View style={styles.container}>
                <Title style={styles.title}>{dishParams.dish_name}</Title>
                <View style={styles.row}>
                    <Text style={styles.subheading}>Цена : </Text>
                    <Text style={styles.text}>{dishParams.price} грн.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.subheading}>Кол-во порций : </Text>
                    <Text style={styles.text}>{dishParams.portion_quantity}</Text>
                </View>
                <Text style={styles.subheading}>Ингредиенты :</Text>
                <DataTable style={styles.table}>
                    <FlatList
                        data={dishIngredients}
                        renderItem={({item}) => <MenuIngredientRow item={item}/>}
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
                <Paragraph style={styles.text}>{dishParams.recipe}</Paragraph>
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
        fontWeight: 'bold'
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