import React, { Component } from 'react';
import '../index.css'

class SearchBar extends Component {
    state = {
        location: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getWeather(this.state.location);
    }

    render(){
        return (
            <div>
                <form id="form" className="valign-wrapper" onSubmit={this.handleSubmit}>
                    <input id="form-input" type="text" onChange={this.handleChange} id="location" name="location" placeholder="Enter your location here..."/> 
                    <button className="btn-flat"><i id="search-button" className="material-icons">search</i></button>
                </form>
            </div>
        )
    }
}

export default SearchBar