import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import { Router, Route, Link } from 'react-router'

render((
  <Router App={Link}>
    <Route path="/" component={App}/>
    <Route path="/About" component={About}/>
  </Router>
), document.getElementById('app'))