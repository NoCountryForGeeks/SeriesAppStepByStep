# Maquetando nuestra app

Para maquetar nuestra apliación vamos a usar **sass** que es un **preprocesador css**.

Con **sass** también podemos importar otros ficheros **sass**, cuando trabajamos con **React** y **sass** tenemos la ventaja de generar estilos para un unico componente y que estos estilos no afecten a otras partes de la aplicación, esto lo conseguiremos con la ayuda de las tareas que configuramos inicialmente.

Lo primero que vamos a hacer es meter el fichero **reset.scss** donde vamos a hacer el tipico reset de los elementos html.

**reset.scss**
```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

El siguiente paso es crear el fichero **common.scss** donde vamos a meter todos los estilos comunes de la aplicación, este fichero va a importar el reset.

```css
@import './reset.scss';

body,
html,
body > div {
    height: 100%;
    max-height: 100%;
}

body {
    font-family: Arial;
    background: rgb(204, 203, 203);
}
```

Ahora en el **masterSeries.scss** Vamos tambiíen a importar nuestro fichero **common.scss** para que estos estilos sean procesados generado por el arbol de estilos.

**masterSeries.scss**

```css
@import '../../content/styles/common.scss'; 

.root {
    height: 100%;
}
```

Para que estos estilos se reflejen en nuestro componente tenemos que hacer los siguiente en nuestro **MasterSeries.js**

```javascript
import styles from './masterSeries.scss';
```

```javascript
render() {
    return(
        <div className={ styles.root }>
            <SeriesSearch searchSeries={ this.searchSeries.bind(this) } />
            <SeriesGrid series={ this.state.series } />
        </div>
    );
}
```

Este ultimo paso que acabamos de hacer, es el que haremos en todos aquellos componentes que queramos estilar.

