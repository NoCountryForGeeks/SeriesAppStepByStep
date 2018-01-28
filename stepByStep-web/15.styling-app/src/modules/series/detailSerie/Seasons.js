import React from 'react';
import { Season } from './seasons/Season';

import seassonsTyles from './seasons.scss';

const Seasons = ({ seasons }) => 
    <ul className={ seassonsTyles.seassons }>
        { seasons.map(season => 
            <Season key={ season.seasson } season={ season } />) 
        }
    </ul>

export { Seasons };