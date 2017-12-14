import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/hello">Hello</Link>
        <Link to="/bye">Bye</Link>
      </div>
    );
  }
}

export default App;
