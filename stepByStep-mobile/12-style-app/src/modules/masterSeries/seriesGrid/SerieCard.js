import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';


const SerieCard = ({ serie, navigate }) =>
    <TouchableWithoutFeedback onPress={ () => navigate('Detail', { id: serie.id }) }>
        <View style={ styles.serieCard }>
            <Image 
                style={ styles.serieImage }
                source={{
                    uri: serie.image.medium,
                    cache: 'only-if-cached',
                }}
            />
            <View style={ styles.serieDetailContainer }>
                <Text style={ styles.serieTitle }>{ serie.title }</Text>
                <Text style={ styles.serieTextFormat }>{ serie.language }</Text>
            </View>
        </View>
    </TouchableWithoutFeedback> 

export { SerieCard };

const styles = StyleSheet.create({
    serieCard: {
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    serieImage: {
        width: '100%', 
        height: 300
    },
    serieDetailContainer: {
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