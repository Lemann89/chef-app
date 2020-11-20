import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {ScrollView, TouchableHighlight, StyleSheet, View, TouchableOpacity} from "react-native";
import {Container, GridList} from "@material-ui/core";
import {Avatar, Button, Card, Title, Paragraph, TouchableRipple} from "react-native-paper";

export const RecipesScreen = ({navigation}) => {

    return (

        <ScrollView>
            <View style={styles.container}>
                <TouchableRipple onPress={() => {
                    navigation.navigate('Recipe');
                }} rippleColor="rgba(0, 0, 0, 0.2)"
                >
                    <Card style={styles.card}>
                        <Card.Cover source={{uri: 'https://picsum.photos/700'}} style={styles.cardImage}/>
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableRipple>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Recipe');
                }}>
                    <Card style={styles.card}>
                        <Card.Cover source={{uri: 'https://picsum.photos/701'}} style={styles.cardImage}/>
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('Recipe');
                }}>
                    <Card style={styles.card}>
                        <Card.Cover source={{uri: 'https://picsum.photos/702'}} style={styles.cardImage}/>
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('Recipe');
                }}>
                    <Card style={styles.card}>
                        <Card.Cover source={{uri: 'https://picsum.photos/703'}} style={styles.cardImage}/>
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('Recipe');
                }}>
                    <Card style={styles.card}>
                        <Card.Cover source={{uri: 'https://picsum.photos/704'}} style={styles.cardImage}/>
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
    },
    card: {
        margin: 5,
        width: 180,
        borderRadius: 15
    },
    cardImage: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    }
});
