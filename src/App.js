import PropTypes from 'prop-types';
import React from 'react';
import { unstable_concurrentAct } from 'react-dom/test-utils';

class App extends React.Component{
  
state = {
  isLoading: true,
  movies: []
};
componentDidMount(){
  setTimeout(() => {
    this.setState({isLoading: false});
  },6000);
}

render(){
    const{isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  }
  
}

export default App;