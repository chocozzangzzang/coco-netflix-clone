import { Alert } from "react-bootstrap";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies"
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../LoadingSpinner";

const PopularMovieSlide = () => {

    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    // console.log(data?.results);

    if(isLoading) 
        return <LoadingSpinner loading={isLoading}/>
    if(isError) return <Alert variant="danger">{error.message}</Alert>
    return (
        <div>
            <MovieSlider 
              title="Popular Movies" 
              movies={data?.results} 
              responsive={responsive} 
            />
        </div>
    )
}

export default PopularMovieSlide