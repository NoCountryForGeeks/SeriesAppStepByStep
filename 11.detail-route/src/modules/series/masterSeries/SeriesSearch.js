import React, { Component } from 'react';

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
            <div>
                <form onSubmit={ event => this.searchSeries(event) }>
                    <input 
                        type='text'
                        name='search'
                        placeholder='Search...'
                        value={ this.state.seach } 
                        onKeyUp={ event => this.updateSearchValue(event) }
                    />
                    <button type="submit">
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export { SeriesSearch };