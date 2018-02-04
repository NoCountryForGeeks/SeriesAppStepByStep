import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import background from '../content/images/background.jpg';

const SeriesRoot = ({ children }) =>
    <View style={ styles.appContainer }>
        <Image style={ styles.appBackground } source={ background } />
        <View style={ styles.pageContainer }>
            { children }
        </View>
    </View>

export { SeriesRoot };

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    appBackground: {
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
    },
    pageContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor:'transparent'
      }
});