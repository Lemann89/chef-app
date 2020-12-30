import React from 'react';
import {DataTable} from "react-native-paper";

const IngredientRow = props => {
    const {item} = props
    return (
        <>
            <DataTable.Row>
                <DataTable.Cell>{item.ingredients_quantity} {item.storage_type}</DataTable.Cell>
                <DataTable.Cell numeric>{item.name}</DataTable.Cell>
            </DataTable.Row>
        </>
    );
};


export default IngredientRow;