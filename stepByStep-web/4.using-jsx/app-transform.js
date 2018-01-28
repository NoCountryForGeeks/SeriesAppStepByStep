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
