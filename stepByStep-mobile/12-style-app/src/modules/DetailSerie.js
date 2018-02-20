import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import axios from 'axios';

import { Info } from './detailSerie/Info';
import { Seasons } from './detailSerie/Seasons';
import { Actors } from './detailSerie/Actors';

class DetailSerie extends Component {
    constructor() {
        super()
        this.state = {
            serie: {
                actors: [],
                image: {},
                seassons: []
            }
        }
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params;
        axios.get(`https://seriesexample.azurewebsites.net/api/series/${id}`)
            .then(response => this.setState({ serie: response.data }));
    }

    render() {
        return(
            <ScrollView style={ styles.detailPage }>
                <Info serie={ this.state.serie } />
                <Seasons seasons={ this.state.serie.seassons } />
                <Actors actors={ this.state.serie.actors } />
            </ScrollView>
        );
    }
}

export { DetailSerie }

const styles = StyleSheet.create({
    detailPage: {
        flex: 1,
        padding: 10
    }
});