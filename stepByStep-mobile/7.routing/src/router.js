import React from 'react';
import { StackNavigator } from 'react-navigation';

import { MasterSeries } from './modules/MasterSeries';

const Router = StackNavigator({
    Main: {
        screen: MasterSeries
    }
},
{
    headerMode: 'screen', 
    cardStyle: {
        backgroundColor: 'transparent'
    }
});

export { Router };