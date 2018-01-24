import React from 'react';
import episodeStyles from './episode.scss';

const Episode = ({ episode }) => 
    <li className={ episodeStyles.episode }>
        <img src={ episode.image ? episode.image.medium : null } alt={ episode.title } />
        <span>{ episode.title }</span>
    </li>

export { Episode };
