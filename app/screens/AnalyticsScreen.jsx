import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from "react-native-paper";
import {LineChart} from "react-native-chart-kit";
import {Dimensions, FlatList, StyleSheet, View} from "react-native";
import axios from "axios";
import environment from "../../environment";
import CookedDishChart from "../components/CookedDishChart";
import VirtualizedView from "../components/VirtualizedView";

const AnalyticsScreen = () => {

    const [cookedMenuDishes, setCookedMenuDishes] = useState([]);

    useEffect(() => {
        axios.get(`${environment.BaseURL}/menu`).then(res => {
            const cookedMenuDishes = res.data.filter(dish => dish.cooked)
            setCookedMenuDishes(cookedMenuDishes)
        })
    }, [])

    const getDishAttrValueByKey = (name, key) => {
        return cookedMenuDishes.filter(dish => dish.name === name).map(dish => dish[key]);
    }

    return (
        <VirtualizedView>
            <Text style={styles.title}>
                Аналитика заказов блюд
            </Text>
            {cookedMenuDishes.length ? (
                <FlatList style={styles.container} data={['Борщ', 'Макароны', 'Гречка']}
                          renderItem={({item}) => <CookedDishChart title={item}
                                     labels={getDishAttrValueByKey(item, 'date')}
                                     data={getDishAttrValueByKey(item, 'portion_quantity')}/>}
                          keyExtractor={(item, index) => index.toString()}/>)
                : (<ActivityIndicator />)
            }
        </VirtualizedView>
    );
};


const styles = StyleSheet.create({
    title: {
        fontWeight: '600',
        fontSize: 25,
        marginLeft: 10,
        marginTop: 10
    },
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
})

export default AnalyticsScreen;