import React, { component, Component } from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';

import { SeriesGrid } from './masterSeries/SeriesGrid';

class MasterSeries extends Component {

    constructor() {
        super();
        this.state = {
            series: []
        }
    }

    componentDidMount() {
        axios.get('https://seriesexample.azurewebsites.net/api/series')
            .then(response => this.setState({ series: response.data }));
    }

    render() {
        return(
            <View>
                <SeriesGrid series={ this.state.series } />
            </View>
        );
    }
}

export { MasterSeries }