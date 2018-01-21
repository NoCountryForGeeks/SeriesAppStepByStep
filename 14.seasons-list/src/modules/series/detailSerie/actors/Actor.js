import React from 'react';

const Actor = ({ actor: { person, character} }) => 
        <div>
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