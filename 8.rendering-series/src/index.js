import React from 'react';
import ReactDOM from 'react-dom';

import { MasterSeries } from './modules/series/MasterSeries';

ReactDOM.render(
    <MasterSeries />,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
