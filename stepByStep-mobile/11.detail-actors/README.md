# Renderizando  Actores

Lo último que nos falta para terminar la pantalla de detalle es mostrar los actores, para eso vamos acrear una lista de de actores.

Lo primero es usar en nuestro **DetailSerie** el nuevo componente que vamos a crear **Actors** al cual le vamos a pasar la lusta de actores.

**DetailSerie.js**

```javascript
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import axios from 'axios';

import { Info } from './detailSerie/Info';
import { Seasons } from './detailSerie/Seasons';
import { Actors } from './detailSerie/Actors';

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
                <Actors actors={ this.state.serie.actors } />
            </ScrollView>
        );
    }
}

export { DetailSerie }
```

Lo siguiente es crear nuestro componente **Actors** el cual va a renderizar una lista de **Actor** al cual le vamos a pasar la **prop actor** y la **prop key** para al manejo interno.

```javascript
import React from 'react';
import { View } from 'react-native';
import { Actor } from './actors/Actor';

const Actors = ({ actors }) =>
    <View>
        {actors.map(actor => 
            <Actor 
                key={ actor.person.name } 
                actor={ actor } 
            />)
        }
    </View>

export { Actors };
```

Por último vamos a crear el componente **Actor** en el que vamos a renderizar la informacion de cada uno de los actores.


```javascript
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Actor = ({ actor: { person, character} }) => 
        <View>
            <Image 
                style={ styles.actorImage }
                source={{
                    uri: person.image ? person.image.medium : null,
                    cache: 'only-if-cached',
                }}
            />
            <Text>{ person.name }</Text>
            <Image 
                style={ styles.actorImage }
                source={{
                    uri: character.image ? character.image.medium : null,
                    cache: 'only-if-cached',
                }}
            />
            <Text>{ character.name }</Text>
        </View>

export { Actor };

const styles = StyleSheet.create({
    actorImage: {
        width: '100%', 
        height: 180,
        resizeMode: 'contain'
    },
});
```

Con esto ya tendríamos hecha toda la funcionalidad y visualización de nuestra app.