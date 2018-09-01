import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Heroes extends Component {
  state = {
    heroes: []
  };

  componentDidMount() {
    const url = 'https://gateway.marvel.com:443/v1/public/characters?apikey=053864010f911ad7cb34d3f11377af19';
    fetch(url)
    .then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        console.log("data", data.data.results);
        const heroes = data.data.results;
        this.setState({heroes})
      });
    });
  }

  render() {
    return (
      <div id="hero-container">
        {this.state.heroes.map(hero => (
          // Turn this into another react component
          <div className="hero">
            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
            <div>{hero.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Heroes;
