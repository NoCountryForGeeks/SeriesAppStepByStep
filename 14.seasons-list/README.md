# Lista de series

Lo último que nos queda es la lista de actores, la unica peculiaridad que tiene es un toogle para mostrar y esconder lo episodios de cada una de las series.

El primer componente que tenemos que hacer es el componente **Seasons** que renderizara una lista se **Season**.

```javascript
import React from 'react';
import { Season } from './seasons/Season';

const Seasons = ({ seasons }) => 
    <div>
        { seasons.map(season => 
                <Season key={ season.title } season={ season }  />) 
        }
    </div>

export { Seasons };
```

El siguiente paso es crear el componente **Season** el cual tendrá el toogle para mostrar los episodios.

```javascript
import React, { Component } from 'react';
import { Episode } from './season/Episode';

class Season extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    toogle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return(
            <div>
                <div>
                    <span>Season: { this.props.season.seasson }</span>
                    <button onClick={ () => this.toogle() }>Toogle</button>
                </div>
                <div>
                    { this.state.isOpen ? this.props.season.episodes.map(episode => 
                        <Episode 
                            key={ episode.title } 
                            episode={ episode } 
                        />) : null 
                    }    
                </div>
            </div>
        )
    }
}

export { Season }
```

En este caso necesitamos que nuestro componente sea un componente de clase ya que necesitamos un estado que nos diga si nuestros episodios deben renderizarse o no. Para manejar la visibilidad lo que hemos hecho es crear un state con un boolean **isOpen** mediante el cual haremos un operador ternario que lo que haga es renderizar una lista de **Episode** o retonar un **null** lo que hará que no se renderize nada.

Hemos creado un botón que ejecuta la función **toogle** la cual cambiara el **state** de **true** a **false** para que el operador ternario que hemos mencionado antes, haga que se renderice una cosa o la otra.

Lo ultimo que nos queda es el componente **Episode**.

```javascript
import React from 'react';

const Episode = ({ episode }) => 
    <div>
        <img src={ episode.image ? episode.image.medium : null } alt={ episode.title } />
        <span>{ episode.title }</span>
    </div>

export { Episode };
```

Con esto ya estaría toda la funcionalidad de nuestra apliación de series hecha.