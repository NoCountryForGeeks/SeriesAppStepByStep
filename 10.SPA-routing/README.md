# Enrutando la SPA

Para aquellos que no saben lo que es una página **SPA** su acrónimo viene de **S**ingle **P**age **A**pplication. Una **SPA** es una única página o mejor dicho **.html** en el cual se va a renderizar toda nuestra web. Aún que parezca que estamos navegando entre páginas, no es así, seguimos en el mismo **html** lo que pasa es que nuestra librería de renderizado de **UI** se encarga de ese manejo, renderizando ciertos componentes que hacen de páginas según las url en la que estemos.

# Ventajas y desventajas de una SPA
**Ventajas**
* Es mas rápida la carga y solo ha de cargar una única vez
* El desarrollo se simplifica
* Una SPA es mas fácil de depurar con las herramientas que nos ofrecen los navegadores
* Es mas fácil tener runa aplicación móvil por que podemos usar el mismo backend

**Desventajas**
* Es mas difícil trabajar el SEO
* El usuario tiene que tener habilitado **JavaScript** para poder usarla
* Comparado con las aplicaciones tradicionales, son menos seguras

Una vez que hemos puesto en contexto que es una **SPA** vamos a ver como conseguir hacerlo con **React**. Lo primero que tenemos que hacer es instalar un router compatible con **React**, en nuestro caso usaremos **react-router-dom**.

```
    yarn add react-router-dom
```

Con esta librería vamos a conseguir renderizar componentes según la url.

Lo siguiente que tenemos que hacer es crearnos un fichero de rutas donde indiquemos para que ruta vamos a renderizar que componente. Para eso nos vamos a crear un fichero **routes.js**

```
src > routes.js
```

Desde este fichero vamos a exportar las rutas como un componente funcional compuesto por componentes de la librería **react-router-dom**.

**routes.js**
```javascript
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MasterSeries } from './modules/series/MasterSeries';

const Routes = () => 
    <Switch>
        <Route path='' component={ MasterSeries } />
    </Switch>


export { Routes }
```

Como podemos ver, hay 2 componentes que usamos de la librería **react-router-dom** uno es **<Switch>** este componente lo que nos indica es que va a renderizar solo una de las rutas que hay dentro cuando machee la url. Poniendo el ejemplo que vamos a hacer en las series, nosotros vamos a tener 2 rutas:

```
/series -> Muestra todas las series
/series/id -> Muestra el detalle de una serie
```

Como podemos ver ambas rutas cuelgan de **series** cuando exista mas de una ruta colgando de la misma url tendremos que envolverlas entre la etiqueta *<Switch></Switch>*. Mas a delante comprenderemos el uso de esta etiqueta cuando añadamos nuestra otra ruta.

El otro Componente que estamos usando aquí es **<Route>** como su propio nombre indica tiene el rol de **ruta**. Podemos ver que le estamos pasando 2 atributos, 1 es **path** donde le vamos a indicar el macheo de la url, en este caso es el raíz y el otro atributo es **component** donde vamos a pasarle el componente que tiene que renderizar cuando estemos en el **path* indicado.

Ahora nos queda terminar de configurar nuestro routing de la aplicación, si nos fijamos en el **index.js** le estamos diciendo directamente en el render que renderize el componente **MasterSeries**. Ahora tenemos que decirle que renderice nuestro router, ya que este se va a encargar de renderizar lo que sea necesario.


```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    document.getElementById('root')
);
```

Ahora lo que vamos a renderizar es lo siguiente, es un componente **BrowserRouter** este componente se va a encargar de manejar el histórico de nuestra SPA, si pulsamos la flecha hacía atrás irá a la página anterior de la navegación de esta manera tendremos un comportamiento totalmente natural a las paginas tradicionales.
A este componente le pasamos la configuración de nuestras rutas que hemos importado, de esta manera tan sencilla tenemos configurado el routing para nuestra SPA.