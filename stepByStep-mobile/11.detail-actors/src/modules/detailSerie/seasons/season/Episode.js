import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Episode = ({ episode }) => 
    <View>
        <Image 
            style={ styles.episodeImage }
            source={{
                uri: episode.image ? episode.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <Text>{ episode.title }</Text>
    </View>

export { Episode };

const styles = StyleSheet.create({
    episodeImage: {
        width: 50, 
        height: 50,
        marginRight: 10 
    }
});