import React, { Component } from 'react';

export default class Map extends Component {

  render() {
    const rows = 30;
    const cols = 30;
    let gridMap = [];
    let cellClass = '';

    for (let i = 0; i < rows; i++) {
      let rowID = `row${i}`;
      let rowOfCells = [];

      for (let j = 0; j < cols; j++) {
        let cellID=`cell${i}_${j}`;
        cellClass=this.props.gridFull[i][j] ? 'new-cell': 'empty-cell';
        rowOfCells.push(
          <td
            key={cellID}
            id={cellID}
            cellClass={cellClass}
            row={i}
            col={j}
            selectCell={this.props.selectCell}
        />);
      }
      gridMap.push(<tr key={i} id={rowID}>{rowOfCells}</tr>);
    }

    return (
      <div>
        {gridMap}
      </div>
    );
  }
}
