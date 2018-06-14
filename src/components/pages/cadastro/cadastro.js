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

  calculatePrice () {
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

  renderOptions(acumulator) {
    let options = [];

    for (var i = 0; i < 100; i = i+acumulator) {
      options.push(i)
    }

    return (options.map((option, index) => <option key={index} value={option}>{option}</option>))
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
            <select name="rolos" className="form-control" value={this.state.rolos} onChange={this.handleInputChange}>
              {this.renderOptions(1)}
            </select>
          </label>

          <label className="form-group">
            <span>De quantos metros são os rolos?</span>
            <select name="metros" className="form-control" value={this.state.metros} onChange={this.handleInputChange}>
              {this.renderOptions(10)}
            </select>
          </label>

          <label className="form-group">
            <span>Qual o valor do pacote?</span>
            <div className="form-control-money">
              <CurrencyInput name="preco" type="number" maxLength="6" autoComplete="off" className="form-control" placeholder="Ex.: 2,99"  pattern="\d*" value={this.state.preco} onChange={this.handleChangePrice}/>
              <small>R$</small>
            </div>
          </label>
        </form>
        <button className="button" onClick={this.calculatePrice}>SALVAR</button>
      </div>
    )
  }
}

export default Cadastro
