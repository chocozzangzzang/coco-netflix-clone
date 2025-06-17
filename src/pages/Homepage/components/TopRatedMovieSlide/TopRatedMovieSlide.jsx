import React from 'react'
import { useTopRatedMovies } from '../../../../hooks/useTopRatedMovies'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { Alert } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner';

const TopRatedMovieSlide = () => {
    
    const { data, isLoading, isError, error } = useTopRatedMovies();
    if(isLoading) 
        return <LoadingSpinner loading={isLoading}/>
    if(isError) return <Alert>{error.message}</Alert>
    return (
        <div>
            <MovieSlider 
                title="Top Rated Movies"
                movies={data?.results}
                responsive={responsive}
            />
        </div>
    )
}

export default TopRatedMovieSlide