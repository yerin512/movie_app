import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import { unstable_concurrentAct } from 'react-dom/test-utils';

class App extends React.Component{
  
state = {
  isLoading: true,
  movies: []
};

getMovies = async () => {
  const {
    data: {
      data: {movies}
    }
  }
  = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  this.setState({ movies, isLoading:false }); //movies:movies 인데 생략한거
}

componentDidMount(){
  this.getMovies();
}

render(){
    const{isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  }
  
}

export default App;