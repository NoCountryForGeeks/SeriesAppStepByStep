# Buscando series

Una vez renderizadas las series vamos a crear la barra de busqueda, para ello vamos a crear un componente de **clase**, ya que va a necesitar tener estado para manejar el valor de búsqueda.

**SearchSeries.js**

```javascript
import React, { Component } from 'react';

class SeriesSearch extends Component {
    render() {
        return()
    }
}

export { SeriesSearch };
```

Tenemos que generar un estado el cual nos permita mantener el valor de búsqueda. **React es una librería de flujo unidireccional**, esto quiere decir que los datos van desde nuestros objetos hacía la vista, pero no de la vista hacia nuestros objetos. Un ejemplo claro es un input text, nosotros podemos asignarle el valor de nuestra propiedad, pero si escribimos sobre el input, este no se refrescará en el modelo.


```javascript
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Image } from 'react-native';

class SeriesSearch extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: ''
        }
    }

    render() {
        return(
            <View>
                <TextInput 
                    placeholder='Search...'
                    value={ this.state.searchValue }
                    underlineColorAndroid='transparent'
                />
                <TouchableWithoutFeedback 
                    title='Search'
                >
                    <View>
                        <Text>Search</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export { SeriesSearch };
```

Para la vista, estamos usando un **TextInput** y un **TouchableWithoutFeedback**, el primer componente es un elementode formulario que nos permite insertar texto, el segundo componente es un **boton** el cual ejecutara la función de búsqueda.

Antes hemos comentado que nuestro modelo no es bidireccional ¿Cómo hacemos para conseguir el valor introducido por el usuario? Podmeos conseguir el mismo efecto mediante los eventos que estos lanzan y actualizar las propiedades, en mi caso cada vez que se haga un **onKeyUp** actualizaré el estado de mi clase.

```javascript
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Image } from 'react-native';

class SeriesSearch extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: ''
        }
    }

    updateSearchValue(value) {
        this.setState({ searchValue: value })
    }

    render() {
        return(
            <View>
                <TextInput 
                    placeholder='Search...'
                    value={ this.state.searchValue }
                    underlineColorAndroid='transparent'
                    onChangeText={ value => this.updateSearchValue(value) }
                />
                <TouchableWithoutFeedback 
                    title='Search'
                >
                    <View>
                        <Text>Search</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export { SeriesSearch };
```
Cada vez que se dispare el evento **onChangeText** se ejecutara el metodo **updateSearchValue** al cual le pasaremos el evento que me está mandando el input. A partir de ese evento podemos sacar el valor del input y setearlo en el **state** de la **clase**.

Ahora falta realizar la búsqueda de las series, pero surge un problema, nuestras series están en **MasterSeries** y es el único que puede obtener nuevas series y setearlo a su propio **state**, lo que significa que la llamada no la podemos hacer desde el componente **SeriesSearch**. Lo que si podemos hacer es desde **MasterSeries** pasar la función de búsqueda como una **prop** asi cuando se resuelva estará en el contexto de **MasterSeries**.

**MasterSeries.js**

```javascript
import React, { component, Component } from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';

import { SeriesGrid } from './masterSeries/SeriesGrid';
import { SeriesSearch } from './masterSeries/SeriesSearch';

class MasterSeries extends Component {

    constructor() {
        super();
        this.state = {
            series: []
        }
    }

    componentDidMount() {
        axios.get('https://seriesexample.azurewebsites.net/api/series')
            .then(response => this.setState({ series: response.data }));
    }

    searchSeries(value) {
        axios.get(`https://seriesexample.azurewebsites.net/api/series?title=${value}`)
            .then(response => this.setState({ series: response.data}));
    }

    render() {
        return(
            <View>
                <SeriesSearch searchSeries={ this.searchSeries.bind(this) }/>
                <SeriesGrid series={ this.state.series } />
            </View>
        );
    }
}

export { MasterSeries }
```

**SeriesSearch.js**

```javascript
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Image } from 'react-native';

class SeriesSearch extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: ''
        }
    }

    searchSeries() {
        this.props.searchSeries(this.state.searchValue);
        this.setState({ searchValue: '' })
    }

    updateSearchValue(value) {
        this.setState({ searchValue: value })
    }

    render() {
        return(
            <View>
                <TextInput 
                    placeholder='Search...'
                    value={ this.state.searchValue }
                    underlineColorAndroid='transparent'
                    onChangeText={ value => this.updateSearchValue(value) }
                />
                <TouchableWithoutFeedback 
                    onPress={ () => this.searchSeries() }
                    title='Search'
                >
                    <View>
                        <Text>Search</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export { SeriesSearch };
```