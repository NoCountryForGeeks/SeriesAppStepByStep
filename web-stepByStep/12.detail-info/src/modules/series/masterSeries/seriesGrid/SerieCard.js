import React from 'react';
import { Link } from 'react-router-dom';

const SerieCard = ({ serie }) => 
    <li>
        <Link to={ `/series/${serie.id}` }>
            <div>
                <img src={ serie.image.medium } alt={ serie.title } />
                <h2>{ serie.title }</h2>
                <span>Language: { serie.language }</span>
            </div>
        </Link>
    </li>

export { SerieCard }