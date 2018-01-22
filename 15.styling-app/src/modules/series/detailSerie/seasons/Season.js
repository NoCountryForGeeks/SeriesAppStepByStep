import React, { Component } from 'react';
import { Episode } from './season/Episode';

import seassonStyles from './seasson.scss';
import arrowDownIcon from '../../../../content/icons/down-arrow.png'

class Season extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    toogle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return(
            <div className={ seassonStyles.seasson }>
                <div className={ seassonStyles.seassonInfoContainer }>
                    <h3>Season { this.props.season.seasson }</h3>
                    <img src={ arrowDownIcon } onClick={ () => this.toogle() } className={ this.state.isOpen ? seassonStyles.arrowDown : seassonStyles.arrowUp }/>
                </div>
                <div>
                    { this.state.isOpen ? this.props.season.episodes.map(episode => 
                        <Episode 
                            key={ episode.title } 
                            episode={ episode } 
                        />) : null 
                    }    
                </div>
            </div>
        )
    }
}

export { Season }
