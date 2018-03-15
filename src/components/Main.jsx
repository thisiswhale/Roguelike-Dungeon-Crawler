import React, { Component } from 'react';

import CharacterInfo from './children/CharacterInfo';
import Map from './children/Map';

export default class Main extends Component {
  constructor() {
    super();

    this.rogue = {
      level: 0,
      health: 100,
      weapon: 'Stick',
      atk: 7,
      exp: 0,
      nextLvl: [60, 180, 210, 250],
    };
    this.enemy = {
      health: 30,
      atk: 12,
    };
    this.setState({
      dungeonLvl: 0,
      toggleDarkness: false,
    });
  }

  render() {
    return (
      <div>
        <CharacterInfo />
        <Map />
      </div>
    );
  }
}
