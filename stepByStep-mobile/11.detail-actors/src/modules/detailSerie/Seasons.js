import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Season } from './seasons/Season';

const Seasons = ({ seasons }) => 
    <View>
        { seasons.map(season => 
            <Season 
                key={ season.seassonId } 
                season={ season } 
            />) 
        }
    </View>

export { Seasons };
