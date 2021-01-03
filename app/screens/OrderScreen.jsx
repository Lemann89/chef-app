import React, {useEffect, useState} from 'react';
import {Button, Snackbar, Text, TextInput} from "react-native-paper";
import Autocomplete from "../components/Autocomplete";
import {StyleSheet, View} from "react-native";
import axios from "axios";
import environment from "../../environment";

const OrderScreen = props => {

    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState();
    const [selectedCountProducts, setSelectedCountProducts] = useState();

    const [visibleSnackbar, setVisibleSnackbar] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');

    useEffect(() => {
        axios.get(`${environment.BaseURL}/products`)
            .then(res => setProducts(res.data));
    }, []);

    const onDismissSnackbar = () => setVisibleSnackbar(false);

    const showSnackbar = (statusCode) => {
        let isCookable = statusCode === 201;
        isCookable ? setSnackbarText("Продукты успешно добавленны на склад!") : setSnackbarText("Что-то пошло не так(((")
        setVisibleSnackbar(true);
    }

    const createOrderedProducts = () => {
        let orderedProducts = [];
        let product = {
            product_id: selectedProductId,
            quantity: selectedCountProducts
        }
        orderedProducts.push(product);
        return orderedProducts;
    }

    const sendOrderedProducts = () => {
        axios.post(`${environment.BaseURL}/warehouse/order`, JSON.stringify(createOrderedProducts()), {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            showSnackbar(res.status);
        })
    }

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Autocomplete
                        error={() => console.log("field invalid")}
                        array={products}
                        field="name"
                        label="Продукт"
                        value={(val) => setSelectedProductId(val.id)}>
                    </Autocomplete>
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="Количество кг"
                        value={selectedCountProducts}
                        onChangeText={selectedCountProduct => setSelectedCountProducts(selectedCountProduct)}>
                    </TextInput>
                </View>
                <View style={{zIndex: 0}}>
                    <Button
                        style={styles.button}
                        mode="contained"
                        color="#007DFB"
                        onPress={sendOrderedProducts}>
                        Заказать
                    </Button>
                </View>
                <View style={styles.snackbarContainer}>
                    <Snackbar
                        visible={visibleSnackbar}
                        duration={3000}
                        onDismiss={onDismissSnackbar}
                    >
                        {snackbarText}
                    </Snackbar>
                </View>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'relative'
    },
    snackbarContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
    },
    input: {
        marginTop: 6,
        height: 45
    },
});

export default OrderScreen;