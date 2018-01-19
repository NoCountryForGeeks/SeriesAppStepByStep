import React from 'react';

const Info = ({ serie }) =>
    <div>
        <img src={ serie.image ? serie.image.medium : null } alt={ serie.title }/>
        <h3>{ serie.title }</h3>
        <span>{ serie.language }</span>
    </div>

export { Info };