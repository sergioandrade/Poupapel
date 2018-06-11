import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Compare from './components/pages/compare/compare'
import Cadastro from './components/pages/cadastro/cadastro'
import logo from './img/poupapel-logo.svg'

class App extends Component {
	render() {
		return (
			<div>
				<figure className="logo">
					<img src={logo} alt="poupapel logo" />
				</figure>
				<Switch>
					<Route exact path='/' component={Compare} />
					<Route path='/compare' component={Compare} />
					<Route path='/cadastro' component={Cadastro} />
				</Switch>
			</div>
		)
	}
}

export default App
