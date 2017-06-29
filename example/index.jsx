import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>Test</div>
    )
  }

}

const render = (messages) => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
