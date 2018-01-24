import React from 'react';

const SerieCard = ({ serie }) => 
    <li>
        <img src={ serie.image.medium } alt={ serie.title } />
        <h2>{ serie.title }</h2>
        <span>Language: { serie.language }</span>
    </li>

export { SerieCard }