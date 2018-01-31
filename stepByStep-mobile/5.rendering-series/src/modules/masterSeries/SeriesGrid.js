import React, { Component } from 'react';
import { FlatList } from 'react-native'
import { SerieCard } from './seriesGrid/SerieCard';

const SeriesGrid = ({ series }) =>
    <FlatList 
        data={ series }
        renderItem={ ({ item }) => <SerieCard serie={ item } /> }
        keyExtractor={ (item) => item.id }
    />

export { SeriesGrid };