# Creando componentes

* Los elementos que hemos creado tienen en común que el tipo de todos ellos se corresponde con elementos del DOM (div, span, img...). Sin embargo, a podemos indicarle que sean de otros tipos, en concreto, funciones, clases o herencia de clases de ES6. Es lo que llamamos componentes.

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
