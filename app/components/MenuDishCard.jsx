import React from 'react';
import {Button, Text, Avatar, TouchableRipple} from "react-native-paper";
import {View, StyleSheet } from "react-native";
import axios from "axios";
import environment from "../../environment";

const MenuDishCard = props => {

    const {item, navigation, updateDishes} = props

    const onDoneHandler = (menuId) => {
        axios.put(`${environment.BaseURL}/menu/${menuId}/status`).then(() => {
            updateDishes()
        });
    }

    return (
        <View style={styles.container}>
            <TouchableRipple onPress={() => {
                navigation.navigate('MenuDish', item.id);
            }} rippleColor="rgba(0, 0, 0, 0)"
            >
                <View style={styles.content}>
                    <Avatar.Image style={styles.image} size={60} source={{uri: item.imageURL}}/>
                    <View style={styles.contentText}>
                        <Text style={styles.title}>
                            {item.name}
                        </Text>
                        <Text style={styles.subtitle}>
                            {item.portion_quantity} порций, {item.date}
                        </Text>
                    </View>
                </View>
            </TouchableRipple>

            <View style={styles.action}>
                <Button
                    style={styles.button}
                    mode="contained"
                    color="#007DFB"
                    onPress={() => {
                        onDoneHandler(item.id)
                    }}
                >
                    Готово
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5,
        paddingRight: 10,
        borderColor: "#919191",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        height: 70
    },
    contentText: {
        paddingLeft: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '700'
    },
    subtitle: {
        color: '#5b5b5b'
    },
    button: {
        borderRadius: 7,
        width: '100%',
    },

});

export default MenuDishCard;