import React, {useEffect, useState} from 'react';
import axios from "axios";
import environment from "../../environment";
import {FlatList, StyleSheet} from "react-native";
import ProductCard from "../components/ProductCard";
import {useFocusEffect} from "@react-navigation/core";
import {ActivityIndicator, Colors} from "react-native-paper";

const WarehouseScreen = (props) => {

    const {navigation} = props

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get(`${environment.BaseURL}/warehouse`)
            .then(res => setProducts(res.data));
    }

    useFocusEffect(
        React.useCallback(() => {
            getProducts();
        }, [])
    );

    useEffect(() => {
        getProducts();
    }, [])

    const compareByProductName = (a, b) => {
        if ( a.product.name < b.product.name ){
            return -1;
        }
        if ( a.product.name > b.product.name ){
            return 1;
        }
        return 0;
    }

    return (
        <>
            {
                products.length ? (
                        <FlatList
                            data={products.sort(compareByProductName)}
                            renderItem={({item}) => <ProductCard item={item} navigation={navigation}/>}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                        />) :
                    (<ActivityIndicator style={styles.pt70} color={Colors.blue500} size='large'/>)
            }
        </>
    );
};

const styles = StyleSheet.create({
    pt70: {
        paddingTop: 70
    }
})

export default WarehouseScreen;