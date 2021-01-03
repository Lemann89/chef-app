import React, {useEffect, useState} from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import MenuDishCard from "../components/MenuDishCard";
import axios from "axios";
import environment from "../../environment";

export const HomeScreen = ({navigation}) => {

    const [menuDishes, setMenuDishes] = useState([]);

    const getDishes = () => {
        axios.get(`${environment.BaseURL}/menu`)
            .then(res => {
                let notCookedDishes = res.data.filter(dish => !dish.cooked);
                setMenuDishes(notCookedDishes)
            });
    }

    useEffect(() => {
        getDishes();
    }, [])

    return (
        <>
            <View style={styles.container}>
                {
                    menuDishes.length ?
                        (<FlatList
                            data={menuDishes}
                            renderItem={({item}) => <MenuDishCard item={item} navigation={navigation} updateDishes={getDishes}/>}
                            keyExtractor={(item, index) => index.toString()}
                        />) :
                        (<View style={styles.center}>
                            <Image
                                style={styles.emptyMenuImage}
                                source={require('../../assets/empty-menu.png')}
                            />
                            <Text
                                style={styles.emptyMenuText}
                            >
                                Сформируйте меню!
                            </Text>
                        </View>)
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    emptyMenuImage: {
        width: '75%',
        height: '75%'
    },
    emptyMenuText: {
        fontSize: 28,
        color: '#424242',
        fontWeight: '500'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})