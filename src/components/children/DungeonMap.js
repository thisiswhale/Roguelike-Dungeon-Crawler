import React, {Component} from 'react';
import _ from 'lodash';

//////////////////////////////////////algorithm part//////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//settings
const GRID_HEIGHT = 35;
const GRID_WIDTH = 50;
const MAX_ROOMS = 15;
const ROOM_SIZE_RANGE = [5, 10];

const c = {
  GRID_HEIGHT,
  GRID_WIDTH,
  MAX_ROOMS,
  ROOM_SIZE_RANGE
};

const createDungeon = () => {
  ////////////////HELPER FUNCTIONS GO HERE //////////////////
  const isValidRoomPlacement = (grid, { x, y, width = 1, height = 1 }) => {
    // check if on the edge of or outside of the grid
    if (y < 1 || y + height > grid.length - 1) {
      return false;
    }
    if (x < 1 || x + width > grid[0].length - 1) {
      return false;
    }

    // here you go from y-1 to y+height+1 and check id they are any floors
    for (let i = y - 1; i < y + height + 1; i++) {
      for (let j = x - 1; j < x + width + 1; j++) {
        if (grid[i][j].type === 'floor') {
          return false;
        }
      }
    }
    // all grid cells are clear
    return true;
  };

	const createRoomsFromSeed = (grid, { x, y, width, height }, range = c.ROOM_SIZE_RANGE) => {
	  // range for generating the random room heights and widths
	  const [min, max] = range;

	  // generate room values for each edge of the seed room
	  const roomValues = [];

	  const north = {
	    height: _.random(min, max),
	    width: _.random(min, max)
	  };
	  //dont get confused about the height and width property when declaring a room.

	  //the x,y,height and width we use from now on are the ones
	  //we pass in the initial function declaration createRoomsFromSeed()

	  north.x = _.random(x, x + width - 1);
	  north.y = y - north.height - 1;
	  north.doorx = _.random(north.x, (Math.min(north.x + north.width, x + width)) - 1);
	  north.doory = y - 1;
	  north.id = 'N';
	  roomValues.push(north);

	  const east = {
	    height: _.random(min, max),
	    width: _.random(min, max)
	  };

	  east.x = x + width + 1;
	  east.y = _.random(y, height + y - 1);
	  east.doorx = east.x - 1;
	  east.doory = _.random(east.y, (Math.min(east.y + east.height, y + height)) - 1);
	  east.id = 'E';
	  roomValues.push(east);

	  const south = {
	    height: _.random(min, max),
	    width: _.random(min, max)
	  };

	  south.x = _.random(x, width + x - 1);
	  south.y = y + height + 1;
	  south.doorx = _.random(south.x, (Math.min(south.x + south.width, x + width)) - 1);
	  south.doory = y + height;
	  south.id = 'S';
	  roomValues.push(south);

	  const west = {
	    height: _.random(min, max),
	    width: _.random(min, max)
	  };

	  west.x = x - west.width - 1;
	  west.y = _.random(y, height + y - 1);
	  west.doorx = x - 1;
	  west.doory = _.random(west.y, (Math.min(west.y + west.height, y + height)) - 1);
	  west.id = 'W';
	  roomValues.push(west);

	  const placedRooms = [];
	  roomValues.forEach(room => {
	    if (isValidRoomPlacement(grid, room)) {
	      // place room
	      grid = placeCells(grid, room);
	      // place door
	      grid = placeCells(grid, {
	        x: room.doorx,
	        y: room.doory
	      }, 'door');
	      // need placed room values for the next seeds
				console.log(placedRooms);
	      placedRooms.push(room);
	    }
	  });

	  //it returns an object --> {}
	  return {grid, placedRooms};
};
  ////////////////////////////////////////////////////////////
  // BUILD OUT THE MAP
  // 1. Make a grid of 'empty' cells, with a random opacity value (for styling)
  let grid = [];
  for (let i = 0; i < c.GRID_HEIGHT; i++) {
    grid.push([]);
    for (let j = 0; j < c.GRID_WIDTH; j++) {
      grid[i].push({
        type: 0,
        opacity: _.random(0.3, 0.8),
        x: i,
        y: j
      });
    }
  }

  //random values for the first room
  const [min, max] = c.ROOM_SIZE_RANGE;

  const firstRoom = {
    x: _.random(1, c.GRID_WIDTH - max ), // Create (x,y) starting position
    y: _.random(1, c.GRID_HEIGHT - max ),
    height: _.random(min, max), // height and width creates teh size of the room
    width: _.random(min, max),
    id: 'O' // shows location of the first room on Grid
  }

  const player = {
    x: _.random(firstRoom.x , firstRoom.x + firstRoom.width - 3 ),
    y: _.random(firstRoom.y , firstRoom.y + firstRoom.height - 3),
    id: 'P'
  }
  console.log('firstRoom', firstRoom)
  console.log('player', player)
  // 2. Place the first room on to grid
  const placeCells = (grid, { x, y, width = 1, height = 1, id }, type = 'floor') => {
    for (let i = y; i < y + height; i++) {
      for (let j = x; j < x + width; j++) {
        // the {} means that we are passing an object with 2 props, type and id
        //since we use ES6 we  dont need to say {type: type, id: id}
        grid[i][j] = { type, id};
      }
    }
    return grid;
  };
  // 3. place the first room on to grid
  grid = placeCells(grid, firstRoom);
  grid = placeCells(grid, player, 'player');
  // 3a. PUT IN PLAYER IN FIRST ROOM
  // 4. Using the first room as a seed, recursivley add rooms to the grid
  const growMap = (grid, seedRooms, counter = 1, maxRooms = c.MAX_ROOMS) => {
    //think about the last and second-to-last iteration
    if (counter + seedRooms.length > maxRooms || !seedRooms.length) {
      return grid;
    }

    //grid will be an obj that has an grid property and placedRooms property
    grid = createRoomsFromSeed(grid, seedRooms.pop());

    // ... is an spread operator
    // [1,2,3].push(...[4,5,6]) result in [1,2,3,4,5,6] not [1,2,3,[4,5,6]]

    seedRooms.push(...grid.placedRooms);
    counter += grid.placedRooms.length;
    return growMap(grid.grid, seedRooms, counter);
  };
  //with this return we generate the final version of our grid that we will use outside.
  //ES6 --> [firstRoom] creates an array with  the firstRoom object as it's first element
  return growMap(grid, [firstRoom]);

};

let firstStore = {
  dungeon: createDungeon()
};

export default class DungeonMap extends Component {

  render() {
    let store = firstStore.dungeon;
    const cells = store.map((element, index) => {
      return (
        <div className='row' key={Date.now() + index}>
        {
          element.map( (cell, i) => {
            return (
              <div className={
                (cell.type == 'floor' || cell.type == 'door' || cell.type == 'player') ? 'cell ' + cell.type : 'cell'}
                style={{opacity: cell.opacity}}
                key={i}
                x={cell.x}
                y={cell.y}>
                {cell.id}
              </div>);
          })
        }
        </div>
    );
    });

    return (<div className='container-map'>
      <div className='table-map'>
        {cells}
      </div>
    </div>)
  }
};
