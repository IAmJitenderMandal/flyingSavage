import React, { Component, Fragment } from 'react';
import Header from './Header'

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
      </Fragment>
    )
  }
}

export default App;