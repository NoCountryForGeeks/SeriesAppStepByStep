# Renderizando  temporadas

Para renderizar el listado de series lo primero que vamos a hacer es en nuestro componente **DetailSerie** vamos a colocar la etiqueta de nuestro componente **Seasons** al cual le pasaremos nuestro array de TEMPORADAS.

**DetailSerie.js**

```javascript
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import axios from 'axios';

import { Info } from './detailSerie/Info';
import { Seasons } from './detailSerie/Seasons';

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
                <Seasons seasons={ this.state.serie.seassons } />
            </ScrollView>
        );
    }
}

export { DetailSerie }
```

Una vez añadido el nuevo componente al cual le pasamos nuestras **seasons** vamos a crear este componente.

**Seasons.js**

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Season } from './seasons/Season';

const Seasons = ({ seasons }) => 
    <View>
        { seasons.map(season => 
            <Season 
                key={ season.seassonId } 
                season={ season } 
            />) 
        }
    </View>

export { Seasons };
```

Vamosa devolver un array de nuestro componente **Season** para cada una de nuestras temporadas, donde le vamos a pasar la temporada y la **key** para que el manejo interno de **React** maneje los componentes mas rápido.

El siguiente componente es **Season** donde tendremos un boton de **toogle** para mostrar y esconder los episodios de esta.

**Season.js**

```javascript
import React, { Component } from 'react';
import { View, 
    Text, 
    TouchableWithoutFeedback, 
    StyleSheet, 
    Image 
} from 'react-native';
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
            <TouchableWithoutFeedback 
                title='toggle' 
                onPress={ this.toogle.bind(this) }
            >
                <View>
                    <Text>Seasson { this.props.season.seasson }</Text>
                    <Text>Toogle</Text>

                    <View>
                        { this.state.isOpen ? this.props.season.episodes.map(episode => 
                            <Episode 
                                key={ episode.title } 
                                episode={ episode } 
                            />) : null
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}    

export { Season };

const styles = StyleSheet.create({
    seassonImage: {
        width: 30, 
        height: 30,
    }
});
```

Hemos creado un **state** interno en el componente para manejar el **toogle** de cada una de las temporadas y que muestre los episodios, también hemos metido un botón el cual ejecuta la función **toogle** la cual se encarga de cambiar el boolean que hace visible los episodios. Por ultimo en caso de estar a true, renderiza una lista de **Episode**.

**Episode.js**

```javascript
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Episode = ({ episode }) => 
    <View>
        <Image 
            style={ styles.episodeImage }
            source={{
                uri: episode.image ? episode.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <Text>{ episode.title }</Text>
    </View>

export { Episode };

const styles = StyleSheet.create({
    episodeImage: {
        width: 50, 
        height: 50,
        marginRight: 10 
    }
});
```

