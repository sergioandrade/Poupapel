import React, { Component } from 'react'
import CurrencyInput from 'react-currency-masked-input'

import './cadastro.scss'

class Cadastro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      marca: '',
      rolos: 2,
      metros: 10,
      preco: '',
      resultado: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.calculatePrice = this.calculatePrice.bind(this)
    this.handleChangePrice = this.handleChangePrice.bind(this)

    this.list = []
  }

  handleChangePrice(event, maskedvalue, floatvalue){
    this.setState({preco: maskedvalue});
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  calculatePrice (e) {
    e.preventDefault()
    this.setState({resultado: (this.state.preco / (this.state.rolos * this.state.metros) * 100).toFixed(2).replace('.', ',')}, this.callBackCalculatePrice)
  }

  callBackCalculatePrice () {
    let cachedList = localStorage.getItem('list')
    if (cachedList) {
      this.list = JSON.parse(cachedList)
    }

    this.list.push(this.state)
    localStorage.setItem('list', JSON.stringify(this.list))
    this.props.history.push('/compare');
  }

  renderRolos(acumulator) {
    let options = [];
    for (var i = 1; i <= 100; i = i+1) {
      options.push(i)
    }

    return (options.map((option, index) => <option key={index} value={option}>{option}</option>))
  }

  renderMetros(acumulator) {
    let options = [];
    for (var i = 10; i < 210; i = i+10) {
      options.push(i)
    }

    return (options.map((option, index) => <option key={index} value={option}>{option}</option>))
  }

  render() {

    return (
      <div className="content">
        <form className="cadastro" onSubmit={this.calculatePrice}>

          <label className="form-group">
            <span>Qual a marca do produto?</span>
            <input type="text" className="form-control" placeholder="Ex.: Personalitè" name="marca" value={this.state.marca} onChange={this.handleInputChange} autoFocus="true" tabIndex="1"/>
          </label>

          <div className="form-group">
            <span>Quantos rolos tem na embalagem?</span>
            <select name="rolos" className="form-control" value={this.state.rolos} onChange={this.handleInputChange} tabIndex="2">
              {this.renderRolos()}
            </select>
          </div>

          <div className="form-group">
            <span>De quantos metros são os rolos?</span>
            <select name="metros" className="form-control" value={this.state.metros} onChange={this.handleInputChange} tabIndex="3">
              {this.renderMetros()}
            </select>
          </div>

          <label className="form-group">
            <span>Qual o valor do pacote?</span>
            <div className="form-control-money">
              <CurrencyInput name="preco" type="number" maxLength="6" autoComplete="off" className="form-control" placeholder="Ex.: 2,99"  value={this.state.preco} onChange={this.handleChangePrice} tabIndex="4"/>
              <small>R$</small>
            </div>
          </label>

          <button className="button" type="submit" tabIndex="5">SALVAR</button>
        </form>
      </div>
    )
  }
}

export default Cadastro
