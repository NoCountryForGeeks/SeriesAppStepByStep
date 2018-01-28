import React from 'react';
import { Actor } from './actors/actor';

import actorsStyles from './actors.scss'

const Actors = ({ actors }) =>
    <ul className={ actorsStyles.actors }>
        { actors.map(actor => 
            <Actor 
                key={ actor.person.name } 
                actor={ actor } 
            />)
        }
    </ul>

export { Actors };