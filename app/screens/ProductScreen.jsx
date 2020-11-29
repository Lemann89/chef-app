import React, {useEffect, useState} from 'react';
import {Title, Card, Text, DataTable} from "react-native-paper";
import axios from "axios";
import environment from "../../environment";
import {StyleSheet, View} from "react-native";
import VirtualizedView from "../components/VirtualizedView";

const ProductScreen = props => {
    const {route} = props
    const productId = route.params
    const [product, setProduct] = useState({});

    const getProduct = () => {
        axios.get(`${environment.BaseURL}/warehouse/${productId}`)
            .then(res => setProduct(res.data))
    }

    useEffect(() => {
        getProduct();
    }, []);


    return (
        <>
            <Card>
                <Card.Cover source={{uri: product.product?.imageURL}}/>
            </Card>
            <View style={styles.container}>
                <Title style={styles.title}>{product.product?.name}</Title>
                <Text style={styles.subheading}>Кол-во на складе :</Text>
                <Text style={styles.text}>{product.quantity} кг/литров/штук</Text>
                <Text style={styles.subheading}>Цена :</Text>
                <Text style={styles.text}>{product.product?.price} грн/кг</Text>
                <Text style={styles.subheading}>Пищевая ценность :</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Жиры</DataTable.Title>
                        <DataTable.Title style={styles.tableLeft}>Белки</DataTable.Title>
                        <DataTable.Title numeric>Углеводы</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>{product.product?.fats}</DataTable.Cell>
                        <DataTable.Cell style={styles.tableLeft}>{product.product?.proteins}</DataTable.Cell>
                        <DataTable.Cell numeric>{product.product?.carbohydrates}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </>
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
        paddingTop: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        paddingTop: 10,
        fontSize: 16
    },
    tableLeft: {
        paddingLeft: 50
    },
})


export default ProductScreen;