import React, { Component } from 'react'
import CardList from '../../app/card-list/card-list'
import {Link} from 'react-router-dom'

import './compare.scss'

class Compare extends Component {
  renderCards () {
    const list = JSON.parse(localStorage.getItem('list'))

    if (list) {
      return(list.map((item, index) => <CardList key={index} item={item} />))
    }
  }

  clearList () {
    localStorage.setItem('list', '')
  }

  render() {
    return (
      <div className="compare">
        {this.renderCards()}
        <Link to="/" className="button">+ Adicionar Marca +</Link>
        <Link to="/" className="button button--secondary" onClick={this.clearList}>Finalizar Comparação</Link>
      </div>
    );
  }
}

export default Compare
