import React, { Component } from 'react';

import CharacterInfo from './children/CharacterInfo';
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
      playerX: 0,
      playerY: 0,
    };
  }
  handleKeyPress = (e) => {
    if (e.key == 'ArrowRight'){
    console.log('right arrow pressed');
      //player (x+1,y)
    }
    else if (e.key == 'ArrowLeft'){
      console.log('Left arrow pressed');
      //player (x-1,y)
    }
    else if (e.key == 'ArrowDown'){
      console.log('Down arrow pressed');
      //player (x,y-1)
    }
    else if (e.key == 'ArrowUp'){
      console.log('up arrow pressed');
      //player (x,y+1)
    }
  }

  componentWillMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

  render() {
    return (
      <div>
        <CharacterInfo
          data={this.explorer}
        />
        <DungeonMap
          playerX={this.state.playerX}
          playerY={this.state.playerY}
        />
      </div>
    );
  }
}
