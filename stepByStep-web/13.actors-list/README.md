# Lista de actores

Nuestra serie tiene una lista de actores, como es un array, vamos a usar el metodo **map** de los arrays.

```javascript
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
```

```javascript
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
```