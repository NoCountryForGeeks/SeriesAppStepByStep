# Trayendo los datos del API

Para hacer llamadas **http** vamos a usar la librería **axios** para ello vamos a instalarla 

```
yarn add axios
```

Una vez que la tengamos instalada, vamos a irnos a nuestro componente **MasterSeries** y vamos a crear nuestro estado que va a ser un array de series y en el ciclo de vida del componente vamos a llamar al **API** para eso usaeremos el metodo **componentDidMount()**.

```javascript
import React, { component, Component } from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';

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
                <Text>Master Page</Text>
            </View>
        );
    }
}

export { MasterSeries }
```