import Carousel from "react-multi-carousel";
import "./MovieSlider.style.css";
import MovieCard from "../MovieCard/MovieCard.jsx";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const MovieSlider = ({ title,  movies, responsive }) => {
    return (
        <div className="movie-slider">
            <h3>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                showDots={true}
                arrows={false}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
            >
            {
                movies.map((movie, index) => 
                <MovieCard movie={movie} key={index}/>)
            }
            </Carousel>
        </div>
    )
}

export default MovieSlider