import React, { Component } from 'react'
import CardList from '../../app/card-list/card-list'
import {Link} from 'react-router-dom'

import './compare.scss'

class Compare extends Component {
  renderCards () {
    if(localStorage.getItem('list')) {
      const list = JSON.parse(localStorage.getItem('list'))
      list.sort((a, b) => {
        if (a.resultado > b.resultado) {
          return 1;
        }
        if (a.resultado < b.resultado) {
          return -1;
        }
        return 0;
      })
      if (list) {
        return(list.map((item, index) => <CardList key={index} item={item} />))
      }
    } else {
      return(<strong>Ops! Não há itens na sua lista.</strong>)
    }
  }

  clearList () {
    localStorage.setItem('list', '')
  }

  render() {
    return (
      <div className="compare">
        {this.renderCards()}
        <Link to="/" className="button">ADICIONAR MARCA</Link>
        <Link to="/" className="button button--secondary" onClick={this.clearList}>LIMPAR LISTA</Link>
      </div>
    );
  }
}

export default Compare
