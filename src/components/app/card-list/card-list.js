import React, { Component } from 'react'
import './card-list.scss'

class CardList extends Component {
  render() {
    let item = this.props.item
    return (
      <div class="card-item">
        <p>marca: {item.marca}</p>
        <p>rolos: {item.rolos}</p>
        <p>metros: {item.metros}</p>
        <p>preco: {item.preco}</p>
        <p>resultado: {item.resultado}</p>
      </div>
    );
  }
}

export default CardList
