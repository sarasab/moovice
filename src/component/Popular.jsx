import React, { Component } from 'react';
import Card from "./Card"

class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b634f31bce06a1625850e6a8c9231f70&language=en-US&page=1')
      .then(res => res.json())
      .then(Popular => {
        this.setState({ movies: Popular.results }, () => console.log(this.state.movies))
      })
      .catch(error => console.error(error))
  }
  render() {
    return (
      <div className="row" >
        {this.state.movies.map((movie, index) =>(
          <div key={index} className="col-3 pb-3" >
            <Card {...movie} />
          </div>))}
      </div>


    );
  }
}

export default Popular;