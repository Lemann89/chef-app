import React from 'react';
import {Text} from "react-native-paper";
import {Dimensions, StyleSheet} from "react-native";
import {LineChart} from "react-native-chart-kit";

const CookedDishChart = props => {

    const {labels, data, title} = props

    return (
        <>
            <Text style={styles.title}>{ title }</Text>
            <LineChart
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: data
                        }
                    ]
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={260}
                verticalLabelRotation={-35}
                xLabelsOffset={20}
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: "#017aff",
                    backgroundGradientFrom: "#0188ff",
                    backgroundGradientTo: "#01afff",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#0188ff"
                    },
                    propsForVerticalLabels: {
                      translateX: -30
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

        </>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop:5,
        marginBottom:5,
        fontWeight: '600',
        fontSize: 18,
    },
})


export default CookedDishChart;