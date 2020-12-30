import React, {useEffect, useState} from 'react';
import {Text, Button, TextInput, Snackbar} from "react-native-paper";
import {View, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MenuDishCard from "../components/MenuDishCard";
import Autocomplete from "../components/Autocomplete";
import axios from "axios";
import environment from "../../environment";


const MenuFormScreen = props => {
    const [date, setDate] = useState(new Date());
    const [datepickerMode, setDatepickerMode] = useState('date');
    const [show, setShow] = useState(false);

    const [dishes, setDishes] = useState([]);
    const [selectedDishId, setSelectedDishId] = useState('');
    const [selectedCountDish, setSelectedCountDish] = useState('');

    const [visibleSnackbar, setVisibleSnackbar] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');

    // datepicker
    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setDatepickerMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    //menu
    const createMenu = () => {
        let menu = []
        let dish = {
            dish_id: selectedDishId,
            portion_quantity: +selectedCountDish,
            date: date
        }
        menu.push(dish);
        return menu
    }

    const onDismissSnackbar = () => setVisibleSnackbar(false);

    const showSnackbar = (data) => {
        let isCookable = !data.some(product => product.is_exist === false);
        isCookable ? setSnackbarText("Меню успешно созданно!") : setSnackbarText("Не хватает продуктов! Закажите продукты на складе.")
        setVisibleSnackbar(true);
    }

    const sendMenu = () => {
        axios.post(`${environment.BaseURL}/menu/create`, JSON.stringify(createMenu()), {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => showSnackbar(res.data[0]))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get(`${environment.BaseURL}/dishes`)
            .then(res => setDishes(res.data));
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.dateText}>{date.toUTCString().slice(0, 17)}</Text>
                <View>
                    <View>
                        <Button
                                style={styles.button}
                                mode="contained"
                                onPress={showDatepicker}
                                color="#007DFB"
                        >
                            Выбрать дату
                        </Button>
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={datepickerMode}
                            display="default"
                            onChange={onDateChange}
                        />
                    )}
                </View>
                <View>
                    <Autocomplete
                        error={() => console.log("field invalid")}
                                  array={dishes}
                                  field="name"
                                  label="Блюдо"
                                  value={(val) => setSelectedDishId(val.id)}>
                    </Autocomplete>
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="Количество порций"
                        value={selectedCountDish}
                        onChangeText={selectedCountDish => setSelectedCountDish(selectedCountDish)}
                    >
                    </TextInput>
                </View>
                <View style={{zIndex: 0}}>
                    <Button
                        style={styles.button}
                        mode="contained"
                        color="#007DFB"
                        onPress={sendMenu}
                    >
                        Сформировать меню
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
    dateText: {
        fontWeight: 'bold',
        fontSize: 36
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

export default MenuFormScreen;