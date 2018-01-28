import React from 'react';
import { SerieCard } from './seriesGrid/SerieCard';

const SeriesGrid = ({ series }) => 
    <ul>
        {
            series.map(serie => <SerieCard key={ serie.title } serie={ serie }/>)
        }
    </ul>

export { SeriesGrid }