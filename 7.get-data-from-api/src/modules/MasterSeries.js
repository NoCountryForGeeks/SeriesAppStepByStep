import React, { Component } from 'react';
import axios from 'axios';

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
                <span>Master Page</span>
            </div>
        );
    }
}

export default MasterSeries;