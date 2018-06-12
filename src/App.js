import React, { Component } from 'react'
import { Route, Switch, Router } from "react-router-dom"
import Compare from './components/pages/compare/compare'
import Cadastro from './components/pages/cadastro/cadastro'
import logo from './img/poupapel-logo.svg'
import History from './helpers/history';

class App extends Component {
	render() {
		return (
			<div>
				<figure className="logo">
					<img src={logo} alt="poupapel logo" />
				</figure>
        <Router history={History}>
  				<Switch>
  					<Route exact path='/' component={Cadastro} />
  					<Route exact path='/compare' component={Compare} />
  				</Switch>
        </Router>
			</div>
		)
	}
}

export default App
