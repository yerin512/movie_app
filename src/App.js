import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component{
  state = {
    count : 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render(){
    return (
    <div>
      <h1>The numer is: {this.state.count}</h1>
      <button>add</button>
      <button>Minus</button>
    </div>
    )
  }
}

export default App;