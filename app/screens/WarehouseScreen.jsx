import React, {useEffect, useState} from 'react';
import axios from "axios";
import environment from "../../environment";
import {FlatList} from "react-native";
import ProductCard from "../components/ProductCard";
import {useFocusEffect} from "@react-navigation/core";

const WarehouseScreen = (props) => {

    const {navigation} = props

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get(`${environment.BaseURL}/warehouse`)
            .then(res => setProducts(res));
    }

    useFocusEffect(
        React.useCallback(() => {
            getProducts();
        }, [])
    );

    useEffect(() => {
        getProducts();
    },[])

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