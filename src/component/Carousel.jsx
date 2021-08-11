import React ,{Component}from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width={500} >
                <div>
                    <img src="popular.jpg" alt="popular"/>
                    <p className="legend" style={{ font:"bold"}}>films populaire</p>
                </div>
                <div>
                    <img src="image2.jpg"  alt="image2"/>
                    <p className="legend">Incrementation de Card avec OnClick et ajout de film au favoris</p>
                </div>
                <div>
                    <img src="image3.jpg"  alt="image3"/>
                    <p className="legend">Les elements stocker</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;