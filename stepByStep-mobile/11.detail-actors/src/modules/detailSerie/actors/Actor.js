import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Actor = ({ actor: { person, character} }) => 
        <View>
            <Image 
                style={ styles.actorImage }
                source={{
                    uri: person.image ? person.image.medium : null,
                    cache: 'only-if-cached',
                }}
            />
            <Text>{ person.name }</Text>
            <Image 
                style={ styles.actorImage }
                source={{
                    uri: character.image ? character.image.medium : null,
                    cache: 'only-if-cached',
                }}
            />
            <Text>{ character.name }</Text>
        </View>

export { Actor };

const styles = StyleSheet.create({
    actorImage: {
        width: '100%', 
        height: 180,
        resizeMode: 'contain'
    },
});
