import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native'
import { SerieCard } from './seriesGrid/SerieCard';

class SeriesGrid extends Component {
    renderSerieCard(serie) {
        return <SerieCard serie={ serie } />
    }

    render() {
        return(
            <FlatList 
                data={ this.props.series }
                renderItem={ ({ item }) => this.renderSerieCard(item) }
                keyExtractor={ (item) => item.id }
            />
        )
    }
}

export { SeriesGrid };