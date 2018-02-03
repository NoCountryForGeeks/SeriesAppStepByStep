import React, { Component } from 'react';
import { FlatList } from 'react-native'
import { SerieCard } from './seriesGrid/SerieCard';

const SeriesGrid = ({ series, navigate }) =>
    <FlatList 
        data={ series }
        renderItem={ ({ item }) => <SerieCard serie={ item } navigate={ navigate }/> }
        keyExtractor={ (item) => item.id }
    />

export { SeriesGrid };