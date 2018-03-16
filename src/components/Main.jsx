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
    this.map = {
      level1: [30, 30]
    };
    this.enemy = {
      health: 30,
      atk: 12,
    };
    this.state = {
      dungeonLvl: 0,
      toggleDarkness: false,
    };
  }

  render() {
    return (
      <div>
        <CharacterInfo data={this.explorer} />
        <Map map={this.map.level1}/>
      </div>
    );
  }
}
