import React from 'react';

const Episode = ({ episode }) => 
    <div>
        <img src={ episode.image ? episode.image.medium : null } alt={ episode.title } />
        <span>{ episode.title }</span>
    </div>

export { Episode };