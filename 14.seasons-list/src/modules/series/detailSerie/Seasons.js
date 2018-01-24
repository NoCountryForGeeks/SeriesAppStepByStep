import React from 'react';
import { Season } from './seasons/Season';

const Seasons = ({ seasons }) => 
    <ul>
        { seasons.map(season => 
                <Season key={ season.seasson } season={ season } />) 
        }
    </ul>

export { Seasons };