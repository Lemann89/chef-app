import React from 'react';
import {Card, Title, TouchableRipple} from "react-native-paper";
import {StyleSheet} from "react-native";

const ProductCard = (props) => {
    const {item, navigation} = props

    return (
        <TouchableRipple onPress={() => {
            navigation.navigate('Product', item.product_id);
        }} rippleColor="rgba(0, 0, 0, 0.2)"
        >
            <Card style={styles.card}>
                <Card.Cover source={{uri: item.product?.imageURL}} style={styles.cardImage}/>
                <Card.Content>
                    <Title style={styles.title}>{item.product?.name}</Title>
                    <Title style={styles.count}>Кол-во: {item.quantity}</Title>
                </Card.Content>
            </Card>
        </TouchableRipple>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 5,
        width: 180,
        borderRadius: 15
    },
    cardImage: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    title: {
        lineHeight: 20,
        fontSize: 15,
        fontWeight: 'bold'
    },
    count: {
        fontSize: 14,
        lineHeight: 18,
    }
});

export default ProductCard;