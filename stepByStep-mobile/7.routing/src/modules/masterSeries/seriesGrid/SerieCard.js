import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';


const SerieCard = ({ serie }) =>
    <View>
        <Image 
            style={ styles.serieImage }
            source={{
                uri: serie.image.medium,
                cache: 'only-if-cached',
            }}
        />
        <View>
            <Text>{ serie.title }</Text>
            <Text>{ serie.language }</Text>
        </View>
    </View> 

export { SerieCard };

const styles = StyleSheet.create({
    serieImage: {
        width: '100%', 
        height: 300
    }
});