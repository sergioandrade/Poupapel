import React, { Component } from 'react'
import { Router, Route, Link, Switch } from 'react-router-dom'
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
              <div className="content">
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
            </div>
            <Switch>
              <Route exact path="/" component={Cadastro} />
              <Route path="/compare" component={Compare} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
