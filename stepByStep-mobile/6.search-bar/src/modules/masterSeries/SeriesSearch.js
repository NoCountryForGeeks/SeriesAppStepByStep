import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Image } from 'react-native';

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
            <View>
                <TextInput 
                    placeholder='Search...'
                    value={ this.state.searchValue }
                    underlineColorAndroid='transparent'
                    onChangeText={ value => this.updateSearchValue(value) }
                />
                <TouchableWithoutFeedback 
                    onPress={ () => this.searchSeries() }
                    title='Search'
                >
                    <View>
                        <Text>Search</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export { SeriesSearch };