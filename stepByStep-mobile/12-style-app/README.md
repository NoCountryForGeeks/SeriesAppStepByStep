# Estilando nuestra app

Para estilar una aplicación móvil con **React-Native** vamos a usar el Objeto **StyleSheet** que importaremos de la librería **React-Native** y que tendrá una función **create** que nos va a permitir pasarle un **JSON** con los estilos. **React-Native** se basa en **flex** y con propiedades también conocidas de la web.

Lo primero que vamos a hacer poner la imaben de fondo, como va a ser la misma para ambas pantallas, lo vamos a estilar en un punto que ambas pantallas compartan, en este caso será nuestro componente **SeriesRoot**. En **React-Native** no existe la propiedad **background-image** ni nada por el estilo, para poder poner una imagen de fondo lo que tendremos que hacer es poner una imagen normal e indicar que el contenedor de las pantallas sea absoluta, asi se sobrepondrán las pantallas encima y estará de fondo.

**Series-root.js**

```javascript
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import background from '../content/images/background.jpg';

const SeriesRoot = ({ children }) =>
    <View style={ styles.appContainer }>
        <Image style={ styles.appBackground } source={ background } />
        <View style={ styles.pageContainer }>
            { children }
        </View>
    </View>

export { SeriesRoot };

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    appBackground: {
        flex: 1,
        resizeMode: 'cover',
        width: undefined,
        height: undefined,
    },
    pageContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor:'transparent'
      }
});
```

Para mostrar la imagen de fondo, hemos importado el **jpg** y se lo hemos pasado como source a la etiqueta **Image**, esta le hemos dicho que haga un cover completo de su tamaño, el flex va ha hacer que ocupe el maximo de su padre. Para que se sobrepongan las pantallas el **View** contenedor de estas es relativo y se colocará en el origen.

**SeriesSearch.js**

```javascript
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';

import searchIcon from '../../content/icons/magnifier.png'

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
            <View style={ styles.searchBar }>
                <View style={ styles.searchBarBorder }>
                    <TextInput 
                        style={ styles.searchBarTextInput }
                        placeholder='Search...'
                        value={ this.state.searchValue }
                        underlineColorAndroid='transparent'
                        onChangeText={ value => this.updateSearchValue(value) }
                    />
                    <TouchableWithoutFeedback 
                        style={ styles.searchBarSubmitButton }
                        onPress={ () => this.searchSeries() }
                        title='Search'
                    >
                        <View>
                            <Image 
                                source={ searchIcon }
                                style={ styles.searchBarButtonIcon }
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

export { SeriesSearch };

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#242424',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    searchBarBorder: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgb(211, 211, 211)',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    searchBarTextInput: {
        flex: 1,
        fontSize: 15,
        color: 'rgb(211, 211, 211)',
        marginRight: 20
    },
    searchBarSubmitButton: {
        flex: 1
    },
    searchBarButtonIcon: {
        width: 20, 
        height: 20,
    }
});
```

**SeriesGrid.js**

```javascript
import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native'
import { SerieCard } from './seriesGrid/SerieCard';

const SeriesGrid = ({ series, navigate }) =>
    <FlatList 
        style={ styles.seriesGrid }
        data={ series }
        renderItem={ ({ item }) => <SerieCard serie={ item } navigate={ navigate }/> }
        keyExtractor={ (item) => item.id }
    />

export { SeriesGrid };

const styles = StyleSheet.create({
    seriesGrid: {
        padding: 10
    }
});
```

**SerieCard.js**

```javascript
import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';


const SerieCard = ({ serie, navigate }) =>
    <TouchableWithoutFeedback onPress={ () => navigate('Detail', { id: serie.id }) }>
        <View style={ styles.serieCard }>
            <Image 
                style={ styles.serieImage }
                source={{
                    uri: serie.image.medium,
                    cache: 'only-if-cached',
                }}
            />
            <View style={ styles.serieDetailContainer }>
                <Text style={ styles.serieTitle }>{ serie.title }</Text>
                <Text style={ styles.serieTextFormat }>{ serie.language }</Text>
            </View>
        </View>
    </TouchableWithoutFeedback> 

export { SerieCard };

const styles = StyleSheet.create({
    serieCard: {
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    serieImage: {
        width: '100%', 
        height: 300
    },
    serieDetailContainer: {
        padding: 10
    },
    serieTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#828080',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#828080',
        borderBottomWidth: 0.5
    },
    serieTextFormat: {
        color: '#828080',
        fontSize: 15
    }
});
```

**DetailSerie.js**

```javascript
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

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
            <ScrollView style={ styles.detailPage }>
                <Info serie={ this.state.serie } />
                <Seasons seasons={ this.state.serie.seassons } />
                <Actors actors={ this.state.serie.actors } />
            </ScrollView>
        );
    }
}

export { DetailSerie }

const styles = StyleSheet.create({
    detailPage: {
        flex: 1,
        padding: 10
    }
});
```

**Info.js**

```javascript
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Info = ({ serie }) =>
    <View style={ styles.serieInfo }>
        <Image 
            style={ styles.serieImage }
            source={{
                uri: serie.image ? serie.image.medium : null,
                cache: 'only-if-cached',
            }}
        />
        <View style={ styles.serieDetailContainer }>
            <Text style={ styles.serieTitle }>{ serie.title }</Text>
            <Text style={ styles.serieTextFormat }>{ serie.language }</Text>
        </View>
    </View>

export { Info };

const styles = StyleSheet.create({
    serieInfo: {
        marginBottom: 10
    },
    serieImage: {
        width: '100%',
        height: 500,
        resizeMode: 'contain'
    },
    serieDetailContainer: {
        paddingBottom: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    serieTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#828080',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: '#828080',
        borderBottomWidth: 0.5
    },
    serieTextFormat: {
        color: '#828080',
        fontSize: 15
    }   
});
```

**Actor.js**

```javascript
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import exchangeIcon from '../../../content/icons/exchange.png';

const Actor = ({ actor: { person, character} }) => 
        <View style={ styles.actor }> 
            <View style={ styles.actorDataContainer }>
                <Image 
                    style={ styles.actorImage }
                    source={{
                        uri: person.image ? person.image.medium : null,
                        cache: 'only-if-cached',
                    }}
                />
                <Text style={ styles.actorNameText }>{ person.name }</Text>
            </View>
            <View>
                <Image 
                    source={ exchangeIcon }
                    style={ styles.exchangeImage }
                />
            </View>
            <View style={ styles.actorDataContainer }>
                <Image 
                    style={ styles.actorImage }
                    source={{
                        uri: character.image ? character.image.medium : null,
                        cache: 'only-if-cached',
                    }}
                />
                <Text style={ styles.actorNameText }>{ character.name }</Text>
            </View>
        </View>

export { Actor };

const styles = StyleSheet.create({
    actor: {
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    actorDataContainer: {
        flex: 0.4
    },
    actorImage: {
        width: '100%', 
        height: 180,
        resizeMode: 'contain'
    },
    actorNameText: {
        color: '#828080',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    exchangeImage: {
        width: 30, 
        height: 30,
    }
});

```

**Seasons.js**

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Season } from './seasons/Season';

const Seasons = ({ seasons }) => 
    <View style={ styles.seassonsContainer }>
        { seasons.map(season => 
            <Season 
                key={ season.seassonId } 
                season={ season } 
            />) 
        }
    </View>

export { Seasons };

const styles = StyleSheet.create({
    seassonsContainer: {
        marginBottom: 10,
    }
});
```

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

import upIcon from '../../../content/icons/up-arrow.png';
import downIcon from '../../../content/icons/down-arrow.png';

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
                <View style={ styles.seasson }>
                    <View style={ styles.seassonRow }>
                        <Text style={ styles.seassonText }>Seasson { this.props.season.seasson }</Text>
                        <View>
                            <Image 
                                source={ this.state.isOpen ? upIcon : downIcon }
                                style={ styles.seassonImage }
                            />
                        </View>
                    </View>
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
    seasson: {
        marginBottom: 10,
    },
    seassonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    seassonText: {
        flex: 1,
        marginRight: 20,
        color: '#828080',
        fontSize: 15
    },
    seassonImage: {
        width: 30, 
        height: 30,
    }
});
```

