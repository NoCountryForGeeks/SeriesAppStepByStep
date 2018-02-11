import React from 'react';
import { View } from 'react-native';
import { Actor } from './actors/Actor';

const Actors = ({ actors }) =>
    <View>
        {actors.map(actor => 
            <Actor 
                key={ actor.person.name } 
                actor={ actor } 
            />)
        }
    </View>

export { Actors };