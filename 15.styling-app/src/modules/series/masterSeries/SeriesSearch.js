import React, { Component } from 'react';

import searchStyles from './seriesSearch.scss';
import peakyImage from '../../../content/images/peaky.jpg'
import magnifierIcon from '../../../content/icons/magnifier.png';

class SeriesSearch extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: ''
        }
    }

    searchSeries(event) {
        event.preventDefault();
        this.props.searchSeries(this.state.searchValue);
        this.setState({ searchValue: '' })
    }

    updateSearchValue(event) {
        this.setState({ searchValue: event.target.value })
    }

    render() {
        return(
            <div className={ searchStyles.serieSearch }>
                <form onSubmit={ event => this.searchSeries(event) }>
                    <input 
                        type='text'
                        name='search'
                        placeholder='Search...'
                        value={ this.state.seach } 
                        onKeyUp={ event => this.updateSearchValue(event) }
                    />
                    <button type="submit">
                        <img src={ magnifierIcon } />
                    </button>
                </form>
            </div>
        )
    }
}

export { SeriesSearch };
