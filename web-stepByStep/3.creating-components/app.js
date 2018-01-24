class ImageWithClasses extends React.Component {
    render() {
        const { src } = this.props;
        return React.createElement(
            'img',
            {
                src
            },
            null
        )
    }
};

function image(props){
    return React.createElement(
        'img',
        {
            src: props.src
        },
        null
    )
};

const Image = ({ src }) =>
    React.createElement(
        'img',
        {
            src
        },
        null
    );

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
        ImageWithClasses, { src: 'http://betabeers.com/uploads/blog/20170420_React_logo_wordmark.png' }, null
    )
);

ReactDOM.render(
  baseElement,
  document.getElementById('root')
);
