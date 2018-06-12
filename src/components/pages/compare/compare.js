import React, { Component } from 'react'
import CardList from '../../app/card-list/card-list'

import './compare.scss'

class Compare extends Component {
  renderCards () {
    const list = JSON.parse(localStorage.getItem('list'))

    if (list) {
      return (
        list.map((item) => {
          return(
            <CardList item={item} />
            )
        })
        )
    }
  }
  render() {
    return (
      <div className="compare">
        {this.renderCards()}
      </div>
    );
  }
}

export default Compare
