import React, { Component } from 'react'
import './card-list.scss'

class CardList extends Component {
  render() {
    let item = this.props.item
    return (
      <div className="card-item-wrapper" data-index={this.props.index + 1}>
        <div className="card-item">
          <div className="card-item__column">
            <strong className="item-brand">{item.marca}</strong>
            <span className="item-info">
              {item.rolos} rolos • {item.metros}m
            </span>
          </div>
          <div className="card-item__column">
            <strong className="item-final-price">R$ {item.resultado}</strong>
          </div>
        </div>
      </div>
    );
  }
}
export default CardList
