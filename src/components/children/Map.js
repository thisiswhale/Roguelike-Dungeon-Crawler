import React, { Component } from 'react';
import Cell from './Cell';

export default class Map extends Component {

  render() {
    const rows = this.props.mapSize[0];
    const cols = this.props.mapSize[1];
    let gridMap = [];
    let cellClass = '';

    for (let i = 0; i < rows; i++) {
      let rowID = `row${i}`;
      let rowOfCells = [];

      for (let j = 0; j < cols; j++) {
        let cellID=`cell${i}_${j}`;
        cellClass=this.props.mapGenerated[i][j] ? 'wall-cell': 'cell';
        rowOfCells.push(
          <Cell
            key={cellID}
            id={cellID}
            cellClass = {cellClass}
            row={i}
            col={j} />
          );
      }
      gridMap.push(<tr key={i} id={rowID}>{rowOfCells}</tr>);
    }

    return (
      <table>
        <tbody className='grid'>
          {gridMap}
        </tbody>
      </table>
    );
  }
}
