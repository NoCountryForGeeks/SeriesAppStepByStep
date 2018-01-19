import React from 'react';
import { Actor } from './actors/actor';

const Actors = ({ actors }) =>
    <div>
        { actors.map(actor => 
            <Actor 
                key={ actor.person.name } 
                actor={ actor } 
            />)
        }
    </div>

export { Actors };