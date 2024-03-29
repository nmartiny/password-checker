import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Ranking from '../Ranking';
import AddPassword from '../AddPassword';

export default class HomeAuth extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Ranking}/>
          <Route path='/ranking' component={Ranking}/>
          <Route path='/addPassword' component={AddPassword}/>
        </Switch>
      </main>
    )
  }
}
