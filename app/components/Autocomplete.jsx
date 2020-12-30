import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Platform} from 'react-native';
import {TextInput} from 'react-native-paper';


export default class Autocomplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.valueInitial,
            selected: this.props.valueInitial,
            error: true
        }
    }

    onFocus() {
        if (this.state.text == this.state.selected && this.state.error) this.setState({error: false})
        else if (this.state.text != this.state.selected && !this.state.error) {
            this.props.error();
            this.setState({error: true})
        }

    }

    toLowerCase(text) {
        return text ? text.toLowerCase() : null
    }

    _listOptions() {
        return (
            <View style={{position: "absolute", zIndex: 9999999, width: '100%', top: 0}}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handler'
                            style={styles.autocomplete}>
                    {
                        this.props.array.filter(object => this.toLowerCase(object[this.props.field]).includes(this.toLowerCase(this.state.text))).map((data, key) => {
                            return (
                                <TouchableOpacity accessible={true}
                                                  key={data.id}
                                                  style={{
                                                      zIndex: 9999999,
                                                      borderBottomWidth: 1,
                                                      borderBottomColor: "#aaa"
                                                  }} onPress={() => {
                                    this.setState({
                                        selected: data[this.props.field],
                                        text: data[this.props.field],
                                        error: false
                                    })
                                    this.props.value(data)
                                }}>
                                    <Text style={styles.autocompleteText}>{data[this.props.field]}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
            </View>
        )
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        label={this.props.label}
                        mode="outlined"
                        onKeyPress={() => {
                            this.onFocus()
                        }}
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
                    />

                </View>
                <View>
                    {this.state.error ? this._listOptions() : null}
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        height: 45
    },
    container: {
        flex: 1
    },
    autocomplete: {
        backgroundColor: "#fff",
        zIndex: 9999999,
    },
    autocompleteText: {
        zIndex: 9999999,
        flex: 1,
        padding: 10,
        fontSize: 17,
    }
});
