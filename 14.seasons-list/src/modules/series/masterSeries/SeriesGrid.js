import React from 'react';
import { SerieCard } from './seriesGrid/SerieCard';

const SeriesGrid = ({ series }) => 
    <div>
        {
            series.map(serie => <SerieCard key={ serie.title } serie={ serie }/>)
        }
    </div>

export { SeriesGrid }