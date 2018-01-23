import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { MasterSeries } from './modules/series/MasterSeries';

const Routes = () => 
    <Switch>
        <Route exact path='/'>
            <Redirect to='series'/>
        </Route>
        <Route exact path='' component={ MasterSeries } />
    </Switch>


export { Routes }