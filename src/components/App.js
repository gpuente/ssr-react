import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  clickHandler = () => {
    this.setState({ animate: !this.state.animate });
  }

  render() {
    const { animate } = this.state;
    const animation = animate ? 'animated hinge' : '';

    return (
      <div className="main-content">
        <h1>React App Boilerplate</h1>
        <i className={`fa fa-html5 icon ${animation}`} aria-hidden="true" />
        <button className="btn btn-outline-primary" onClick={this.clickHandler}>Click Me</button>
        <Link className="link" to="/hello">Hello</Link>
        <Link className="link" to="/bye">Bye</Link>
      </div>
    );
  }
}

export default App;
