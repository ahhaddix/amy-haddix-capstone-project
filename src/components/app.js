import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import Nav from "./navbar"
import Home from "./pages/home"
import Ideas from "./pages/ideas"
import AddIdea from "./pages/add-idea"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ideas" component={Ideas} />
          <Route path="/add-idea" component={AddIdea} />
        </Switch>
      </div>
    );
  }
}
