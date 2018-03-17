import React, {Component} from 'react';

export default class Cell extends Component {

  render() {
    const {
      cellClass,
      cellID
    } = this.props

    return (
      <td
        className={cellClass}
        key={cellID}
        id={cellID}></td>)
  }
}
