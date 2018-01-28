const Demo = () =>
    <div id='hello-world' className='example'>
        <span>Hello World</span>
        <img src='http://betabeers.com/uploads/blog/20170420_React_logo_wordmark.png' />
    </div>


ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);
