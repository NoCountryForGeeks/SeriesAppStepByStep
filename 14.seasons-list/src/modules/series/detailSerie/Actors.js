import React from 'react';
import { Actor } from './actors/actor';

const Actors = ({ actors }) =>
    <ul>
        { actors.map(actor => 
            <Actor 
                key={ actor.person.name } 
                actor={ actor } 
            />)
        }
    </ul>

export { Actors };