import React from 'react';

const Episode = ({ episode }) => 
    <li>
        <img src={ episode.image ? episode.image.medium : null } alt={ episode.title } />
        <span>{ episode.title }</span>
    </li>

export { Episode };