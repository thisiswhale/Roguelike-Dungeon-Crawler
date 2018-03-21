import React, { Component } from 'react';

import CharacterInfo from './children/CharacterInfo';
import Map from './children/Map';
import DungeonMap from './children/DungeonMap';

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

    this.potion = 40;

    this.weapon = [['Stick', 7],['Dagger',14]]
    this.monster = {
      health: 30,
      atk: 12,
    };
    this.boss = {
      health: 400,
      atk: 50
    }

    this.state = {
      dungeonLvl: 0,
      toggleDarkness: false,
      mapGenerated: []
    };
  }



  render() {
    return (
      <div>
        <CharacterInfo
          data={this.explorer}
        />
        {/* <Map
          mapSize={this.mapSize[0]}
          mapGenerated={this.state.mapGenerated}
        /> */}
        <DungeonMap / >
      </div>
    );
  }
}
