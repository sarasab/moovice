import React, { Component } from 'react';
import Card from "./Card"

class PopularBattle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      currentBattle: 2,
     
    }
    this.increment = this.increment.bind(this)
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b634f31bce06a1625850e6a8c9231f70&language=en-US&page=1')
      .then(res => res.json())
      .then(Popular => {
        this.setState({ movies: Popular.results }, () => console.log(this.state.movies))
      })
      .catch(error => console.error(error))
  }

  increment() {
    this.setState({currentBattle: this.state.currentBattle + 2 })
  }

  render() {
    return (
      <div className="row" >
        {this.state.movies.slice(0, this.state.currentBattle).map((movie, index) => (
          <div key={index} className="col-3 pb-3" onClick={this.increment}>
            <Card {...movie} />
          </div>)
        )}
      </div>
    );
  }
}

export default PopularBattle;
