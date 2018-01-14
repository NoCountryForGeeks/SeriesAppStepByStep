# Hello World Básico

* Creamos un fichero html como base de la página, con el contenido siguiente:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Demo</title>
</head>

<body>
    <div id="root"></div>
</body>

</html>
```

* Importamos React desde la cdn:
    - Development:
        - https://unpkg.com/react@16/umd/react.development.js
        - https://unpkg.com/react-dom@16/umd/react-dom.development.js
    - Production:
        - https://unpkg.com/react@16/umd/react.production.min.js
        - https://unpkg.com/react-dom@16/umd/react-dom.production.min.js

* Actualizamos el fichero index importando estos scripts
* Creamos el fichero app.js con el código correspondiente para realizar el hello World

    ```javascript
    ReactDOM.render(
      React.createElement('h1', null, 'Hello world!'),
      document.getElementById('root')
    );        
    ````




* Incluímos en el index.html este nuevo archivo app.js
