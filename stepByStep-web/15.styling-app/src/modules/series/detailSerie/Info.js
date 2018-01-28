import React from 'react';
import infoStyles from './info.scss';

const Info = ({ serie }) =>
    <div className={ infoStyles.info }>
        <div>
            <img src={ serie.image.medium } alt={ serie.title }/>
        </div>
        <div className={ infoStyles.detail }>
            <h3>{ serie.title }</h3>
            <span>{ serie.language }</span>
        </div>
    </div>

export { Info };
