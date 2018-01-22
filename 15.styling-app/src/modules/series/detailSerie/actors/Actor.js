import React from 'react';

import actorStyles from './actor.scss';
import exchangeIcon from '../../../../content/icons/exchange.png'

const Actor = ({ actor: { person, character} }) => 
        <div className={ actorStyles.actor }>
            <div>
                <img src={ person.image ? person.image.medium : null } alt={ person.name } />
                <span>{ person.name }</span>
            </div>
            <div>
                <img src={ character.image ? character.image.medium : null } alt={ character.name } />
                <span>{ character.name }</span>
            </div>
        </div>

export { Actor };
