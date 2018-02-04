import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Info = ({ serie }) =>
    <View style={ styles.serieInfo }>
        <Image 
            style={ styles.serieImage }
            source={{
                uri: serie.image ? serie.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <View style={ styles.serieDetailContainer }>
            <Text style={ styles.serieTitle }>{ serie.title }</Text>
            <Text style={ styles.serieTextFormat }>{ serie.language }</Text>
        </View>
    </View>

export { Info };

const styles = StyleSheet.create({
    serieInfo: {
        marginBottom: 10
    },
    serieImage: {
        width: '100%',
        height: 500,
        resizeMode: 'contain'
    },
    serieDetailContainer: {
        paddingBottom: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    serieTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#828080',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#828080',
        borderBottomWidth: 0.5
    },
    serieTextFormat: {
        color: '#828080',
        fontSize: 15
    }   
});


