import React from 'react';
import { StackNavigator } from 'react-navigation';

import { MasterSeries } from './modules/MasterSeries';
import { DetailSerie } from './modules/DetailSerie';

const Router = StackNavigator({
    Main: {
        screen: MasterSeries
    },
    Detail: {
        path: 'series/:id',
        screen: DetailSerie
    }
},
{
    headerMode: 'screen', 
    cardStyle: {
        backgroundColor: 'transparent'
    }
});

export { Router };