import React, { Component, Fragment } from 'react';
import Header from './Header'
import Hero from './Hero'
import NewArrival from './NewArrivel'
import BagTypes from './BagTypes'

class App extends Component {
  constructor() {
    super();
    this.state = {
      'app': "flyingSavage"
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <NewArrival />
        <BagTypes />
      </Fragment>
    )
  }
}

export default App;