# Renderizando series

Vamos a empezar a renderizar las series, para eso pasaremos nuestro estado (array de series) a nuestro componente **SeriesGrid** donde usaremos una lista virtual (solo renderiza lo que se ve enpantalla) en el cual renderizara cada **SerieCard**.

Lo primero es importar en nuestro componente **MasterSeries** el componente **SeriesGrid** y pasarle como **prop** las series.

```javascript
import React, { component, Component } from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';

import { SeriesGrid } from './masterSeries/SeriesGrid';

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

    render() {
        return(
            <View>
                <SeriesGrid series={ this.state.series } />
            </View>
        );
    }
}

export { MasterSeries }
```

Ahora nos vamos a ir a **SeriesGrid.js** y vamos a crear un componente de **función**.
```javascript
import React, { Component } from 'react';
import { FlatList } from 'react-native'
import { SerieCard } from './seriesGrid/SerieCard';

const SeriesGrid = ({ series }) =>
    <FlatList 
        data={ series }
        renderItem={ ({ item }) => <SerieCard serie={ item } /> }
        keyExtractor={ (item) => item.id }
    />

export { SeriesGrid };
```

Como vemos estamos renderizando una **FlatList** que es un componente de **React-Native** el cual va a virtualizar la lista de items que le pasemos. Para los que no sepan que es una lista virtual, esta va a ir añadiendo y eliminando las series en la vista que solo esten en la pantalla, de esta manera nuestra interfaz tiene menos elementos renderizados y conseguiremos una vista mas fluida.

Este componente recibe 3 **props**, el **data** va a ser nuestro array de series. **renderItem** es la función la cual va a renderizar el template (en este caso nuestra **SerieCard**) por cada uno de los items, por cada serie que vaya a renderizar, llamará a esa función pasandole como parámetro la serie y tendremos que retornar el componente que queramos que pinte, **<SerieCard>** recibe una serie como **prop** que en este caso nos lo pasa como parámetro la **FlatList** llamandolo **item**. La ultima **prop** es **keyExtractor** que hace lo mismo que la **prop key** cuando usamos un **map()**, de esta manera **React** sabe renderizar mas rapida y eficientemente los elementos en pantalla.

Por último vamos a crear el componente de **SerieCard**, en este caso es un componente completamente visual por lo que vamos a crear un componente de **función**.

```javascript
import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';


const SerieCard = ({ serie }) =>
    <View>
        <Image 
            style={ styles.serieImage }
            source={{
                uri: serie.image.medium,
                cache: 'only-if-cached',
            }}
        />
        <View>
            <Text>{ serie.title }</Text>
            <Text>{ serie.language }</Text>
        </View>
    </View> 

export { SerieCard };

const styles = StyleSheet.create({
    serieImage: {
        width: '100%', 
        height: 300
    }
});
```

Si nos fijamos, hemos metido estilos a la imagen, esto es por que si no le damos tamaños a la imagen, no lo vamos a ver ya que por defecto es 0.
