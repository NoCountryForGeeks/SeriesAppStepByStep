import React from 'react';

const SerieCard = ({ serie }) => 
    <div>
        <img src={ serie.image.medium } alt={ serie.title } />
        <h2>{ serie.title }</h2>
        <span>Language: { serie.language }</span>
    </div>

export { SerieCard }