import React from 'react'
class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '/image/Film-High-Quality-PNG.png',
        }
    }
    addToFavorites = (id) => {
        this.setState({ favorite: true })
        const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
        if (!favorites.includes(id)) {
            favorites.push(id)
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
    }
    removeToFavorite = (id) => { }
    handleClick = (event, id) => {
        event.stopPropagation()
        this.state.favorite ? this.removeToFavorite(id) : this.addToFavorites(id)
    }
    render() {
        return <div >
            <div className="card mb-3" style={{ maxHeight: "750px" }} >
                <img src={'https://image.tmdb.org/t/p/w300/' + this.props.backdrop_path} className="card-img-top" style={{ maxWidth: "540px", maxHeight: "440px" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Titre: {this.props.title}  </h5>
                    <p className="card-text">Année de sortie: {this.props.release_date}  </p>
                    <p className="card-text">
                        <button type="button"
                            className="btn btn-primary btn-lg"
                            onClick={(e) => this.handleClick(e, this.props.id)}>
                            Ajouter au favoris
                        </button> <br />
                        Description:  {this.props.overview}</p>
                </div>
            </div>
        </div>
    }
}
export default Card