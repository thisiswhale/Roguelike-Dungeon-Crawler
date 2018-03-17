import React, { Component } from 'react';

import CharacterInfo from './children/CharacterInfo';
import Map from './children/Map';

export default class Main extends Component {
  constructor() {
    super();

    this.explorer = {
      level: 0,
      health: 100,
      weapon: 'Stick',
      atk: 7,
      exp: 0,
      nextLvl: [60, 180, 210, 250],
    };
    this.mapSize = [[30,30]];
    this.monster = {
      health: 30,
      atk: 12,
    };
    this.state = {
      dungeonLvl: 0,
      toggleDarkness: false,
      mapGenerated: []
    };
  }

  componentWillMount() {
    this.setState({
      mapGenerated: Array(this.mapSize[0][0]).fill(Array(this.mapSize[0][1]).fill(false))
    })
  }

  render() {
    return (
      <div>
        <CharacterInfo
          data={this.explorer}
        />
        <Map
          mapSize={this.mapSize[0]}
          mapGenerated={this.state.mapGenerated}
        />
      </div>
    );
  }
}
