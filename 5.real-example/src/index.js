import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from './modules/Root';

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
