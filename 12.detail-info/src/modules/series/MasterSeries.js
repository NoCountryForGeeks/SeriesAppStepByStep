import React, { Component } from 'react';
import axios from 'axios';

import { SeriesGrid } from './masterSeries/SeriesGrid';
import { SeriesSearch } from './masterSeries/SeriesSearch';

class MasterSeries extends Component {

    constructor() {
        super()
        this.state = {
            series: []
        }
    }

    componentDidMount() {
        axios.get('https://seriesexample.azurewebsites.net/api/series')
            .then(response => this.setState({ series: response.data}));
    }

    searchSeries(value) {
        axios.get(`https://seriesexample.azurewebsites.net/api/series?title=${value}`)
            .then(response => this.setState({ series: response.data}));
    }

    render() {
        return(
            <div>
                <SeriesSearch searchSeries={ this.searchSeries.bind(this) } />
                <SeriesGrid series={ this.state.series } />
            </div>
        );
    }
}

export { MasterSeries };