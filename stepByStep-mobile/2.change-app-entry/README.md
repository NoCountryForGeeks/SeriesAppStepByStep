# Cambiar entrada de la aplicación

Comó hemos mencionado en el paso anterior el fichero **App.js** el punto de entrada de nuestra aplicación, pero si queremos respetar nuestra manera de organizar las carpetas podemos cambiarlo.

Para trabajar con modulos vamos a generar la siguiente estructura de carpetas

```
src > modules
```

Dentro de **src** vamos a crear los archivos  **AppEntry.js** e **index.js**, este primero es el quelanzara la aplicación a **Expo**.

**AppEntry.js**
```javascript

import { KeepAwake, registerRootComponent } from 'expo';
import { App } from './index';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);

```

Aquí lo mas importante es pasarle el componente **App** que vamos a exportar desde el **index.js** el resto son metodos que nos da **Expo** para pasarle nuestro punto de entrada de la aplicación.


**index.js**

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App =  () => 
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
    </View>

export { App }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
```

En este caso hemos copiado y pegado el mismo componente **App** que había en **App.js** y lo hemos puesto aquí.

Con esto ya podemos eliminar el fichero **App.js** ya que hemos cambiado el punto de entrada de nuesta apliacación.

Lo ultimo que nos quedaría por cambiar es el el fichero **package.json** la ruta al fichero de entrada de nuestra app en la propiedad **main**.

```json
{
  "main": "src/AppEntry.js",
  "private": true,
  "dependencies": {
    "expo": "^25.0.0",
    "react": "16.2.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-25.0.0.tar.gz"
  }
}
```