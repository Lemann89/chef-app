import React, {useEffect, useState} from 'react';
import {Button, Text} from "react-native-paper";
import axios from "axios";
import environment from "../../environment";
import {FlatList} from "react-native";
import DishCard from "../components/DishCard";
import ProductCard from "../components/ProductCard";

const WarehouseScreen = (props) => {

    const {navigation} = props

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get(`${environment.BaseURL}/warehouse`)
            .then(res => setProducts(res));
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <FlatList
                data={products.data}
                renderItem={({item}) => <ProductCard item={item} navigation={navigation}/>}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </>
    );
};

export default WarehouseScreen;