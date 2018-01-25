import React from 'react';

import reactImage from '../../content/images/reactLogo.jpeg';
import boilerplateStyles from './boilerplate.scss';

const Boilerplate = () => 
    <div className={ boilerplateStyles.root }>
        <a href='http://www.nocountryforgeeks.com'>No Country For Geeks</a>
        <h1>React Web Boilerplate</h1>
        <img src={ reactImage } />
    </div>

export { Boilerplate }