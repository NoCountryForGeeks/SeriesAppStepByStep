# Renderizando series

Ahora que tenemos las series con la llamada API, vamos a pasar hacía abajo el estado para ir renderizando las series con los componentes hijo.

Lo primero es importar **SeriesGrid** en la clase **MasterDeries** y pasarle nuestro estado de series como propiedades.

```javascript
import React, { Component } from 'react';
import axios from 'axios';

import { SeriesGrid } from './masterSeries/SeriesGrid';

class MasterSeries extends Component {

    constructor() {
        super()
        this.state = {
            series: []
        }
    }

    componentDidMount() {
        axios.get('https://seriesexample.azurewebsites.net/api/series')
            .then(response => this.setState({ series: response.data}));
    }

    render() {
        return(
            <div>
                <SeriesGrid series={ this.state.series } />
            </div>
        );
    }
}

export default MasterSeries;
```

Estas props ahora las recogeremos en el componente **SeriesGrid** que en este caso se trata de un componente funcional que va a renderizar un array de componentes **SerieCard**.

```javascript
import React from 'react';
import { SerieCard } from './seriesGrid/SerieCard';

const SeriesGrid = ({ series }) => 
    <div>
        {
            series.map(serie => <SerieCard serie={ serie }/>)
        }
    </div>

export { SeriesGrid }
```

Nuestro componente **SerieCard** también es un componente funcional que va a renderizar los datos de nuestras series.

```javascript
import React from 'react';

const SerieCard = ({ serie }) => 
    <div>
        <img src={ serie.image.medium } alt={ serie.title } />
        <h2>{ serie.title }</h2>
        <span>Language: { serie.language }</span>
    </div>

export { SerieCard }
```

Si ejecutamos, en la consola del navegador tendremos un **Warning** por parte de **React** que nos dirá lo siguiente:
```
Warning: Each child in an array or iterator should have a unique "key" prop.
```

Para solucionar este **Warning** necesitamos añadir una **prop** llamada **key** (no tenemos que hacer nada con ella en el componente hijo) cuando manejemos arrays de componentes, de esta manera **React** sabrá manejar los componente mas rapidamente.

```javascript
series.map(serie => <SerieCard key={ serie.title } serie={ serie }/>)
```

