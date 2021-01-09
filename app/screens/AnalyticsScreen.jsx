import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Colors, Text} from "react-native-paper";
import {FlatList, StyleSheet} from "react-native";
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
                Аналитика приготовленных блюд
            </Text>
            {
                cookedMenuDishes.length ? (
                <FlatList style={styles.container}
                          data={['Борщ', 'Макароны', 'Гречка']}
                          renderItem={({item}) => <CookedDishChart title={item}
                                     labels={getDishAttrValueByKey(item, 'date')}
                                     data={getDishAttrValueByKey(item, 'portion_quantity')}/>}
                          keyExtractor={(item, index) => index.toString()}
                />)
                : (<ActivityIndicator style={styles.pt70} color={Colors.blue500} size='large'/>)
            }
        </VirtualizedView>
    );
};


const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 22,
        marginLeft: 10,
        marginTop: 10
    },
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    pt70: {
        paddingTop: 70
    }
})

export default AnalyticsScreen;