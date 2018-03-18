import React, {Component} from 'react';

export default class Cell extends Component {

  render() {
    const {
      cellClass,
      cellID
    } = this.props

    // handleKeyDown = (e) => {
    //   if (e.keyCode == 37){
    //
    //   }
    //   else if (e.keyCode == 38){
    //
    //   }
    //   else if (e.keyCode == 39){
    //
    //   }
    //   else if (e.keyCode == 40){
    //
    //   }
    // }

    return (
      <td
        className={cellClass}
        key={cellID}
        id={cellID}
        // onKeyDown={this.handleKeyDown}
        ></td>)
  }
}
// key codes are arrows
// left: 37
// up: 38
// right: 39
// down: 40
