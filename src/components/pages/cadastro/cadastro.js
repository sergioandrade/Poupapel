import React, { Component } from 'react'
import RangeSlider from '../../app/range-slider/range-slider'

import './cadastro.scss'

class Cadastro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marca: '',
      rolos: 2,
      metros: 10,
      preco: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div>
        <form className="cadastro">

          <label className="form-group">
            <span>Qual a marca do produto?</span>
            <input type="text" className="form-control" placeholder="Ex.: Personalitè" name="marca" value={this.state.marca} onChange={this.handleInputChange}/>
          </label>

          <label className="form-group">
            <span>Quantos rolos tem na embalagem?</span>
            <RangeSlider steps="2" min="2" max="100" name="rolos" value={this.state.rolos} onChange={this.handleInputChange}/>
          </label>

          <label className="form-group">
            <span>De quantos metros são os rolos?</span>
            <RangeSlider steps="10" min="10" max="100" name="metros" value={this.state.metros} onChange={this.handleInputChange}/>
          </label>

          <label className="form-group">
            <span>Qual o valor do pacote?</span>
            <input type="text" className="form-control" placeholder="R$ 00,00" name="preco" value={this.state.preco} onChange={this.handleInputChange}/>
          </label>
        </form>

        <div className="register-button-wrapper">
          <button className="button">SALVAR</button>
        </div>
      </div>
    )
  }
}

export default Cadastro
