import React, { Component } from 'react';
import axios from 'axios';

import { SeriesGrid } from './masterSeries/SeriesGrid';

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

    render() {
        return(
            <div>
                <SeriesGrid series={ this.state.series } />
            </div>
        );
    }
}

export { MasterSeries };