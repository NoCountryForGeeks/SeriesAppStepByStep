import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native'
import { SerieCard } from './seriesGrid/SerieCard';

const SeriesGrid = ({ series, navigate }) =>
    <FlatList 
        style={ styles.seriesGrid }
        data={ series }
        renderItem={ ({ item }) => <SerieCard serie={ item } navigate={ navigate }/> }
        keyExtractor={ (item) => item.id }
    />

export { SeriesGrid };

const styles = StyleSheet.create({
    seriesGrid: {
        padding: 10
    }
});