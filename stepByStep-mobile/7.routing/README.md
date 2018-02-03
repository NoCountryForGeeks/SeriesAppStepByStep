# Routing

Para poder tener diferentes pantallas en nuestra aplicación tenemos que añadir un **Routing** para ello necesitamos instalar un paquete, en este caso vamos a usar **react-navigation** ya que es un paquete nativo para móviles.

Para instalarlo, nos vamos auna consola de comandos, nos situamos en la carpeta del proyecto y ejecutamos

```
yarn add react-navigation
```

Con el paquete ya instalado, podemos configurar nuestro **Router**. Lo primeroe s crear un fichero **router.js** y configurar nuestras rutas.

**outer.js**

```javascript
import React from 'react';
import { StackNavigator } from 'react-navigation';

import { MasterSeries } from './modules/MasterSeries';

const Router = StackNavigator({
    Main: {
        screen: MasterSeries
    }
},
{
    headerMode: 'screen', 
    cardStyle: {
        backgroundColor: 'transparent'
    }
});

export { Router };
```

En este caso nuesto **Router** lo vamos a configurar con un **StackNavigator** esta función que no expone la librería **react-navigation** nos permite declarar rutas en un componente, existen otros tipos para crear tabs, etc.

El siguiente paso es crear Un componente **Root** donde se van a renderizar las rutas.

**Series-root.js**

```javascript
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SeriesRoot = ({ children }) =>
    <View style={ styles.appContainer }>
        { children }
    </View>

export { SeriesRoot };

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    }
});
```

Hemos creado un componente funcional el cual nos va a permitir renderizar dentro las rutas, cuando usamos la **prop children** es por que entre las etiquetas de este componente vamos a insertar mas componentes y etiquetas que vamosa  renderizar dentro.

Lo ultimo que nos queda es cambiar la configuración en nuestro **index.js** para usar nuestro componente **Series-root** en el cual meteremos nuestro router.

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SeriesRoot } from './modules/Series-root';
import { Router } from './router';

const App =  () => 
    <SeriesRoot>
        <Router/>
    </SeriesRoot>   

export { App }

```