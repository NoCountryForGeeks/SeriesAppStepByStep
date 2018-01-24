import React from 'react';

const Actor = ({ actor: { person, character} }) => 
        <li>
            <div>
                <img src={ person.image ? person.image.medium : null } alt={ person.name } />
                <span>{ person.name }</span>
            </div>
            <div>
                <img src={ character.image ? character.image.medium : null } alt={ character.name } />
                <span>{ character.name }</span>
            </div>
        </li>

export { Actor };