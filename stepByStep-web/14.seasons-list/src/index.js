import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
