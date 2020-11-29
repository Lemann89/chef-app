import React from 'react';
import { Text, Button } from "react-native-paper";

const SuccessScreen = props => {
    const {navigation} = props
    return (
        <>
            <Text>Успешно!</Text>
            <Button
                mode="contained"
              onPress={() => {
                  navigation.navigate('Warehouse');
              }}
            >
                На склад!
            </Button>
        </>
    );
};

export default SuccessScreen;