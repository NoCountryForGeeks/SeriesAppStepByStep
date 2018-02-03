# Renderizando información de la series

Para comenzar a mostrar la información de las series, vamos a hacer la llamada **API** para traernos la serie seleccionada.

El componente que va a tener nuestro estado de la serie es **DetailSerie* donde tendremos el state que actualizaremos cuando se resuelva nuetra llamada al **API**.

```javascript
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import axios from 'axios';

import { Info } from './detailSerie/Info';

class DetailSerie extends Component {
    constructor() {
        super()
        this.state = {
            serie: {
                actors: [],
                image: {},
                seassons: []
            }
        }
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params;
        axios.get(`https://seriesexample.azurewebsites.net/api/series/${id}`)
            .then(response => this.setState({ serie: response.data }));
    }

    render() {
        return(
            <ScrollView>
                <Info serie={ this.state.serie } />
            </ScrollView>
        );
    }
}

export { DetailSerie }
```

En el metodo del ciclo de vida de **React componentDidMount** vamso a hacer la llamada al **API** mandandole el id de la serie que queremos, que si recordamos en el paso anterior, lo estabamos enviando en el path de la pantalla. Para poder coger el parametro del path, lo vamos a coger de la **prop** que nos inyecta **react-navigation** que esta en:

```javascript
const { id } = this.props.navigation.state.params;
```

Con ese id ya podemos ealizar la llamada **API** y cuando la obtengamos, se la setearemos al **state**, y se lo pasamos a nuestro componente **Info**. Otra cosa que hemos metido es el componente **ScrollView** ya que si nuestro contenido no entra en la pantalla necesitamos que tenga scroll.

**Info.js**

```javascript
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Info = ({ serie }) =>
    <View>
        <Image 
            style={ styles.serieImage }
            source={{
                uri: serie.image ? serie.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <Text>{ serie.title }</Text>
        <Text>{ serie.language }</Text>
    </View>

export { Info };

const styles = StyleSheet.create({
    serieImage: {
        width: '100%',
        height: 500,
        resizeMode: 'contain'
    }
});
```

En nuestro componente hemos metido unos estilos básicos a la imagen para que se vea en pantalla.

