import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Episode = ({ episode }) => 
    <View style={ styles.episode }>
        <Image 
            style={ styles.episodeImage }
            source={{
                uri: episode.image ? episode.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <Text style={ styles.episodeTitleText }>{ episode.title }</Text>
    </View>

export { Episode };

const styles = StyleSheet.create({
    episode: {
        backgroundColor: '#828080',
        borderBottomColor: 'rgb(211, 211, 211)',
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    episodeImage: {
        width: 50, 
        height: 50,
        marginRight: 10 
    },
    episodeTitleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'rgb(211, 211, 211)'
    }
});