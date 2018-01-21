import React, { Component } from 'react';
import axios from 'axios';

import { Info } from './detailSerie/Info';
import { Actors } from './detailSerie/Actors';
import { Seasons } from './detailSerie/Seasons';

import detailSerieStyles from './detailSerie.scss';

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
            .then(response => {
                this.setState({ serie: response.data })});
    }

    render() {
        return(
            <div className={ detailSerieStyles.detailSerie }>
                <div className={ detailSerieStyles.detailSerieContainner }>
                    <Info serie={ this.state.serie } />
                    <div className={ detailSerieStyles.columns }>
                        <Seasons seasons={ this.state.serie.seassons } />
                        <Actors actors={ this.state.serie.actors } />
                    </div>
                </div>
            </div>
        )
    }
}

export { DetailSerie }
