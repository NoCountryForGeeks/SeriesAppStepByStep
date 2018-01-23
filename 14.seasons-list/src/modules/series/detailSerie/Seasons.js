import React from 'react';
import { Season } from './seasons/Season';

const Seasons = ({ seasons }) => 
    <div>
        { seasons.map(season => 
                <Season key={ season.title } season={ season }  />) 
        }
    </div>

export { Seasons };