const { Component } = React;

//////////////////////////////////////algorithm part//////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//settings
const GRID_HEIGHT = 40;
const GRID_WIDTH = 40;
const MAX_ROOMS = 15;
const ROOM_SIZE_RANGE = [7, 12];

const c= { GRID_HEIGHT, GRID_WIDTH, MAX_ROOMS, ROOM_SIZE_RANGE};

const createDungeon = () => {
  ////////////////HELPER FUNCTIONS GO HERE ////////////////////

	////////////////////////////////////////////////////////////
	// BUILD OUT THE MAP

	// 1. make a grid of 'empty' cells, with a random opacity value (for styling)
	let grid = [];
	for (let i = 0; i < c.GRID_HEIGHT; i++) {
		grid.push([]);
		for (let j = 0; j < c.GRID_WIDTH; j++) {
			grid[i].push({type: 0, opacity: _.random(0.3, 0.8)});
		}
	}
  // 2. random values for the first room

  // 3. place the first room on to grid


  return grid;
}


let firstStore= {
  dungeon: createDungeon()
}

class Dungeon extends Component {
  render() {
    let { store } = this.props;

      const cells= store.map((element, index) => {
      return (
        <div className='row' key={Date.now() + index}>
        {
            element.map((cell, i) => {
              return (
               <div className={
                (cell.type == 'floor' || cell.type == 'door') ? 'cell ' + cell.type : 'cell'
                   }
                style={{opacity: cell.opacity}}
                key={i}
                 >
                  {cell.id}
                </div>
              )
            })
          }
        </div>
      )
    });

    return(
      <div className='app'>
        <div className='flex-container'>
            {cells}
        </div>
      </div>

    )
  }
};


ReactDOM.render(
  <Dungeon store={firstStore.dungeon}/>,
  document.getElementById("container")
);
