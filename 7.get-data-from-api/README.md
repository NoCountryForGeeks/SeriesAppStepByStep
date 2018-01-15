# Trayendo las series del API

En este caso vamos a usar **axios** como librería para realizar nuestras llamdas http, para ello lo vamos a instalar a través de yarn.

```javascript
    yarn add axios
```

Necesitamos hacer esta llamada en algún punto del componente, para eso tenemos varios metodos del ciclo de vida.

 * Primer renderizado
   * getDefaultProps
   * getInitialState
   * componentsWillMount
   * render
   * componentDidMount
 * Cambio de props
   * componentWillReciveProps
   * souldComponentUpdate
   * componentWillUpdate
   * render
   * componentDidUpdate
 * Cambios de state
   * shouldComponentUpdate
   * componentWillUpdate
   * render
   * componentDidUpdate
 * Componente se desmonta
   * componentWillUnmount
       


Ahora en el ciclo de vida del componente vamos a realizar la llamada API, en este caso lo vamos a hacer en el componentDidMount() y cuando se resuelva la promesa lo setearemos en el state de nuestro componente.

```javascript
componentDidMount() {
        axios.get('https://seriesexample.azurewebsites.net/api/series')
            .then(response => this.setState({ series: response.data}));
    }
```