import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SeriesRoot } from './modules/Series-root';
import { Router } from './router';

const App =  () => 
    <SeriesRoot>
        <Router/>
    </SeriesRoot>   

export { App }
