

import PropTypes from 'prop-types';
import React from 'react';
import { unstable_concurrentAct } from 'react-dom/test-utils';

class App extends React.Component{
  state = {
    count : 0
  };
  add = () => {
    this.setState((current)=> ({count:current.count + 1}));
  }
  minus = () => {
    this.setState((current)=> ({count:current.count - 1}));
  }
  render(){
    return (
    <div>
      <h1>The numer is: {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;

//class에는 render()말고도 몇가지 함수가 있다.
//component가 생성되거나 지워지거나 업데이트될때마다 실행되는 함수들 몇가지.
/*
Mouning
Updating
Unmounting
*/