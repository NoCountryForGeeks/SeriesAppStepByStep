import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MasterSeries } from './modules/series/MasterSeries';

const Routes = () => 
    <Switch>
        <Route path='' component={ MasterSeries } />
    </Switch>


export { Routes }