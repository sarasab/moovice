import React from 'react'
import Card from './Card'

class Favorites extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            favId: [],

        }
    }

    addToFavorites = (id) => {
        const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
        this.setState({ favId: favorites }, this.getMovise)
    }

    getMovise = () => {
        const API_KEY = 'b634f31bce06a1625850e6a8c9231f70'
        Promise.all(this.state.favId.map(id => fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(res => res.json())))
            .then(movies => this.setState({ movies }))
    }


    componentDidMount() { this.addToFavorites() }




    render() {
        return (

            <div className="row" >
                {this.state.movies.map(movie => 
                <div key={movie.id} className="col-3 pb-3" > <Card {...movie} /></div>)}
            </div>
        )
    }
}



export default Favorites