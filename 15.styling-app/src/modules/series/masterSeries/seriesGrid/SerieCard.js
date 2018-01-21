import React from 'react';
import { Link } from 'react-router-dom';
import serieCardStyles from './serieCard.scss';

const SerieCard = ({ serie }) => 
    <article className={ serieCardStyles.serieCard }>
        <Link to={ `/series/${serie.id}` }>
            <figure>
                <img src={  serie.image.medium } alt={ serie.title } />
                <figcaption>
                    <h2>{ serie.title }</h2>
                    <p>Language: { serie.language }</p>
                </figcaption>            
            </figure>
        </Link>   
    </article>

export { SerieCard }