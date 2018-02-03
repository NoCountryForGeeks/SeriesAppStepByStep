import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Info = ({ serie }) =>
    <View>
        <Image 
            style={ styles.serieImage }
            source={{
                uri: serie.image ? serie.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <Text>{ serie.title }</Text>
        <Text>{ serie.language }</Text>
    </View>

export { Info };

const styles = StyleSheet.create({
    serieImage: {
        width: '100%',
        height: 500,
        resizeMode: 'contain'
    }
});


