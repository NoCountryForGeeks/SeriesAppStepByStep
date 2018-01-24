import React, { Component } from 'react';
import axios from 'axios';

import { Info } from './detailSerie/Info';
import { Actors } from './detailSerie/Actors';

class DetailSerie extends Component {
    constructor() {
        super();
        this.state = {
            serie: {
                actors: [],
                image: {},
                seassons: []
            }
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`https://seriesexample.azurewebsites.net/api/series/${id}`)
            .then(response => this.setState({ serie: response.data }));
    }

    render() {
        return(
            <div>
                <Info serie={ this.state.serie } />
                <Actors actors={ this.state.serie.actors } />
            </div>
        )
    }
}

export { DetailSerie }