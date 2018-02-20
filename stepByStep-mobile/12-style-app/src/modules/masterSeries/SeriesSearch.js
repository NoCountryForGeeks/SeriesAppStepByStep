import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';

import searchIcon from '../../content/icons/magnifier.png'

class SeriesSearch extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: ''
        }
    }

    searchSeries() {
        this.props.searchSeries(this.state.searchValue);
        this.setState({ searchValue: '' })
    }

    updateSearchValue(value) {
        this.setState({ searchValue: value })
    }

    render() {
        return(
            <View style={ styles.searchBar }>
                <View style={ styles.searchBarBorder }>
                    <TextInput 
                        style={ styles.searchBarTextInput }
                        placeholder='Search...'
                        value={ this.state.searchValue }
                        underlineColorAndroid='transparent'
                        onChangeText={ value => this.updateSearchValue(value) }
                    />
                    <TouchableWithoutFeedback 
                        style={ styles.searchBarSubmitButton }
                        onPress={ () => this.searchSeries() }
                        title='Search'
                    >
                        <View>
                            <Image 
                                source={ searchIcon }
                                style={ styles.searchBarButtonIcon }
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

export { SeriesSearch };

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#242424',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    searchBarBorder: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgb(211, 211, 211)',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    searchBarTextInput: {
        flex: 1,
        fontSize: 15,
        color: 'rgb(211, 211, 211)',
        marginRight: 20
    },
    searchBarSubmitButton: {
        flex: 1
    },
    searchBarButtonIcon: {
        width: 20, 
        height: 20,
    }
});