import React from 'react';
import {DataTable} from "react-native-paper";
import {StyleSheet} from "react-native";

const IngredientRow = props => {
    const {item} = props
    return (
        <>
            <DataTable.Row>
                <DataTable.Cell>{item.quantity} {item.ingredient_type?.storage_type}</DataTable.Cell>
                <DataTable.Cell numeric>{item.product.name}</DataTable.Cell>
            </DataTable.Row>
        </>
    );
};


export default IngredientRow;