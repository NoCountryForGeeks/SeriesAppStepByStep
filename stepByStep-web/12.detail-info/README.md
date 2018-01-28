# Detalle de serie

Para conseguir mostrar la información de una serie específica necesitamos ahcer una llamada API a  **/series/:id** si recordamos, en cada una de la card hemos creado un link con esa estructura, lo que tenemos que hacer es leer ese id y hacer la llamada.

Para sacar ese id lo haremos a través del route que nos inyecta la librería **react-router-dom** en las props;

**DetailSerie.js**
```javascript
componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://seriesexample.azurewebsites.net/api/series/${id}`)
        .then(response => this.setState({ serie: response.data }));
}
```

El objeto **match** es el que nos inyecta **react-router-dom** en el tenemos una propiedad **params** que hace referencia a los parametros de la url, como nsotros pusimos **/series/:id** el dano nos llega en **params.id** si usasemos otro nombre, nos vendría en ese nombre de propiedad.

Con esto ya podemos realizar la llamada API y empezar a mostrar la información de la serie.

**DetailSerie.js**
```javascript
import React, { Component } from 'react';
import axios from 'axios';

import { Info } from './detailSerie/Info';

class DetailSerie extends Component {
    constructor() {
        super();
        this.state = {
            serie: {
                actors: [],
                image: {},
                seassons: []
            }
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`https://seriesexample.azurewebsites.net/api/series/${id}`)
            .then(response => this.setState({ serie: response.data }));
    }

    render() {
        return(
            <div>
                <Info serie={ this.state.serie } />
            </div>
        )
    }
}

export { DetailSerie }
```

**Info.js**
```javascript
import React from 'react';

const Info = ({ serie }) =>
    <div>
        <img src={ serie.image ? serie.image.medium : null } alt={ serie.title }/>
        <h3>{ serie.title }</h3>
        <span>{ serie.language }</span>
    </div>

export { Info };
```
