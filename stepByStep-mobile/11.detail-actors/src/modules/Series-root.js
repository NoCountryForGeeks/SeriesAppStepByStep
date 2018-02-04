import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SeriesRoot = ({ children }) =>
    <View style={ styles.appContainer }>
        { children }
    </View>

export { SeriesRoot };

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    }
});