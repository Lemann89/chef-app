import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from "./app/components/Navigation";

export default function App() {
    return (
        <>
                <NavigationContainer>
                    <SafeAreaView style={styles.container}>
                        <Navigation/>
                    </SafeAreaView>
                </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0
    },
});