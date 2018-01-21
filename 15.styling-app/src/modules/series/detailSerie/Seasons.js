import React from 'react';
import { Season } from './seasons/Season';

import seassonsTyles from './seasons.scss';

const Seasons = ({ seasons }) => 
    <div className={ seassonsTyles.seassons }>
        { seasons.map(season => 
                <Season key={ season.title } season={ season }  />) 
        }
    </div>

export { Seasons };