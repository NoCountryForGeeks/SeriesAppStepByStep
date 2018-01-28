import React, { Component } from 'react';

import { Counter } from './Root/Counter';
import rootStyles from './root.scss';

class Root extends Component {
    constructor(){
        super();

        this.state = { counter: 0 }
    }

    onHandleClick(bool) {
        bool ? this.setState({ ...this.state, counter: this.state.counter +1 })
        : this.setState({ ...this.state, counter: this.state.counter -1 })
    }

    render() {
        return (
            <div>
                <div onClick={ () => this.onHandleClick(true) }>Si pulsas aquí aumentamos el contador</div>
                <div onClick={ () => this.onHandleClick(false) }>Si pulsas aquí disminuimos el contador</div>
                <Counter counter={ this.state.counter } />
            </div>
        );
    }
}

export { Root }
