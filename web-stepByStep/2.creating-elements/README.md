# Creando elementos

* Partiendo del ejemplo anterior, vamos modificando el fichero app.js para crear elementos dentro de otros elementos.

```javascript
const baseElement = React.createElement(
    'div',
    {
        id: 'hello-world',
        className: 'example'
    },
    'Hello World'
);

ReactDOM.render(
  baseElement
  document.getElementById('root')
);
```

* Modificamos ese código añadiendo los componentes anidados:

```javascript
const baseElement = React.createElement(
    'div',
    {
        id: 'hello-world',
        className: 'example'
    },
    React.createElement(
        'span', null, 'Hello world'
    ),
    React.createElement(
        'img',
        {
            src: 'http://betabeers.com/uploads/blog/20170420_React_logo_wordmark.png'
        },
        null
    )
);

ReactDOM.render(
  baseElement,
  document.getElementById('root')
);
```

* Introucimos una hoja de estilos:

```css
.example {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

span {
    font-sized: 20px;
    color: 10px;
}

img {
    margin-top: 10px;
    width: 150px;
    height: 50px;
}

```

* Enlazamos nuestros estilos a la página html:

```
<link rel="stylesheet" type="text/css" href="./app.css">
```
