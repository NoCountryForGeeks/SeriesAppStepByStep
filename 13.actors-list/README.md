# Lista de actores

Nuestra serie tiene una lista de actores, como es un array, vamos a usar el metodo **map** de los arrays.

```javascript
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
```

```javascript
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
```