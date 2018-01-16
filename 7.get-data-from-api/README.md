# Trayendo las series del API

En este caso vamos a usar **axios** como librería para realizar nuestras llamadas http, para ello lo vamos a instalar a través de yarn.

```javascript
    yarn add axios
```

Vamos a generar un componente de clase ya que necesitamos mantener el estado de nuestras series en algún punto de la aplicación. Los datos de las series los tenemos en un API 

```
https://seriesexample.azurewebsites.net/api/series
```

Este API tiene 3 endpoints
* /series -> trae todas las series sin filtrar
* /series?title={busqueda} -> se trae las series que el titulo machee con la busqueda
* /series/id -> trae la serie del id

Para obtener nuestras series necesitamos hacer esta llamada en algún momento, para eso podemos aprovechar el ciclo de vida de un componente.

 * **Primer renderizado**
   * getDefaultProps
   * getInitialState
   * componentsWillMount
   * render
   * componentDidMount
 * **Cambio de props**
   * componentWillReciveProps
   * souldComponentUpdate
   * componentWillUpdate
   * render
   * componentDidUpdate
 * **Cambios de state**
   * shouldComponentUpdate
   * componentWillUpdate
   * render
   * componentDidUpdate
 * **Componente se desmonta**
   * componentWillUnmount
       

El punto correcto para hacer una llamada API en el ciclo de vida de un componente es en el método **componentDidMount**.

Para poder hacer la llamada necesitamos importar **axios** la llamada será de tipo **GET**.

 Hay que tener en cuenta que una llamada http es asíncrona y si ejecutamos la llamada lo que nos va a devolver es una **Promesa**, cuando esta se resuelva correctamente setearemos el resultado de nuestra llamada al **state**

Ahora en el ciclo de vida del componente vamos a realizar la llamada API, en este caso lo vamos a hacer en el componentDidMount() y cuando se resuelva la promesa lo setearemos en el state de nuestro componente.

```javascript
import React, { Component } from 'react';
import axios from 'axios';

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
                <span>Master Page</span>
            </div>
        );
    }
}

export { MasterSeries };
```