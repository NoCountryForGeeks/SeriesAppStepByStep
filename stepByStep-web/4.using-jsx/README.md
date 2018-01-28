# Usando jsx

* A la hora de desarrollar UI´s complejas, trabajar directamente con React.createElement() o devolviendo los objetos asociados no es práctico. Se hace muy complicado desarrollar todo el árbol de elementos que, generalmente, necesitaremos en tipologías complejas.

Para ello, se crea el lenguaje ___jsx___, que, a modo de HTML, nos permite describir nuestras UI´s de manera mucho más sencilla.

* Si intentamos cargar nuestro ___index.html___ observamos que no funcionará. Los navegadores sólo pueden trabajar con código Javascript, HTML y CSS. Por ello, necesitaremos hacer uso de herramientas que nos permita transformar este código a código legible por parte de los navegadores. Utilizaremos [https://babeljs.io/repl/](babel-repl)

Nuestro código original:

```javascript
const Demo = () =>
    <div id='hello-world' className='example'>
        <span>Hello World</span>
        <img src='http://betabeers.com/uploads/blog/20170420_React_logo_wordmark.png' />
    </div>


ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);
```

Quedaría tras la conversión:

```Javascript
'use strict';

var Demo = function Demo() {
    return React.createElement(
        'div',
        { id: 'hello-world', className: 'example' },
        React.createElement(
            'span',
            null,
            'Hello World'
        ),
        React.createElement('img', { src: 'http://betabeers.com/uploads/blog/20170420_React_logo_wordmark.png' })
    );
};

ReactDOM.render(React.createElement(Demo, null), document.getElementById('root'));
```

Creamos el fichero y lo enlazamos en nuestro index.html para ver como vuelve a funcionar de nuevo.
