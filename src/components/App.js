import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickBtn = () => {
    console.log('hello'); //eslint-disable-line
  }

  render() {
    return (
      <div>
        <h1>React App</h1>
        <button className="btn btn-outline-primary" onClick={this.onClickBtn}>Click Me</button>
      </div>
    );
  }
}

export default App;
