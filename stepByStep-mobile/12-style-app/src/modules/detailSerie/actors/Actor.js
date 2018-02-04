import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import exchangeIcon from '../../../content/icons/exchange.png';

const Actor = ({ actor: { person, character} }) => 
        <View style={ styles.actor }> 
            <View style={ styles.actorDataContainer }>
                <Image 
                    style={ styles.actorImage }
                    source={{
                        uri: person.image ? person.image.medium : null,
                        cache: 'only-if-cached',
                    }}
                />
                <Text style={ styles.actorNameText }>{ person.name }</Text>
            </View>
            <View>
                <Image 
                    source={ exchangeIcon }
                    style={ styles.exchangeImage }
                />
            </View>
            <View style={ styles.actorDataContainer }>
                <Image 
                    style={ styles.actorImage }
                    source={{
                        uri: character.image ? character.image.medium : null,
                        cache: 'only-if-cached',
                    }}
                />
                <Text style={ styles.actorNameText }>{ character.name }</Text>
            </View>
        </View>

export { Actor };

const styles = StyleSheet.create({
    actor: {
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    actorDataContainer: {
        flex: 0.4
    },
    actorImage: {
        width: '100%', 
        height: 180,
        resizeMode: 'contain'
    },
    actorNameText: {
        color: '#828080',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    exchangeImage: {
        width: 30, 
        height: 30,
    }
});
