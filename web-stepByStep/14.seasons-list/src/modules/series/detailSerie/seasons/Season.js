import React, { Component } from 'react';
import { Episode } from './season/Episode';

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
            <li>
                <div>
                    <span>Season: { this.props.season.seasson }</span>
                    <button onClick={ () => this.toogle() }>Toogle</button>
                </div>
                <ul>
                    { this.state.isOpen ? this.props.season.episodes.map(episode => 
                        <Episode 
                            key={ episode.title } 
                            episode={ episode } 
                        />) : null 
                    }    
                </ul>
            </li>
        )
    }
}

export { Season }