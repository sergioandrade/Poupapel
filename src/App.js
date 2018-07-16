import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'
import Compare from './components/pages/compare/compare'
import Cadastro from './components/pages/cadastro/cadastro'
import logo from './img/poupapel-logo.svg'
import IconHome from './components/icons/icon-home'
import IconList from './components/icons/icon-list'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router history={customHistory}>
          <div>
            <div className="header">

              <Link to="/">
                <IconHome />
              </Link>
              <figure className="logo">
                <img src={logo} alt="poupapel logo" />
              </figure>
              <Link to="/compare">
                <IconList />
              </Link>
            </div>
            <Route exact path="/" component={Cadastro} />
            <Route path="/compare" component={Compare} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
