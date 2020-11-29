import React from 'react';
import {Card, Paragraph, Title, TouchableRipple} from "react-native-paper";
import {StyleSheet} from "react-native";

const DishCard = (props) => {
    const {item, navigation} = props

    return (
        <TouchableRipple onPress={() => {
            navigation.navigate('Recipe', item.id);
        }} rippleColor="rgba(0, 0, 0, 0.2)"
        >
            <Card style={styles.card}>
                <Card.Cover source={{uri: item.imageURL}} style={styles.cardImage}/>
                <Card.Content>
                    <Title style={styles.title}>{item.name}</Title>
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
        paddingTop: 5,
        lineHeight: 20,
        fontSize: 15,
        fontWeight: 'bold'
    },
});

export default DishCard;