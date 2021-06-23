import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { backdrop_path, title, overview } = this.props
        return (
            <div>
                <div className="card" >
                    <img src={'https://image.tmdb.org/t/p/w300/' + backdrop_path} className="card-img-top" alt='Title' />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"> {overview}</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default Card;