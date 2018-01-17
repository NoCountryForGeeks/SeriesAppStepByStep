import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MasterSeries } from './modules/series/MasterSeries';
import { DetailSerie } from './modules/series/DetailSerie';

const Routes = () => 
    <Switch>
        <Route exact path='/series' component={ MasterSeries } />
        <Route path='/series/:id' component={ DetailSerie } />
    </Switch>


export { Routes }