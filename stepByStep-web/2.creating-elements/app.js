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
