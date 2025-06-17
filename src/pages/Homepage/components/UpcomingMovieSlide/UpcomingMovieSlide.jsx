import React from 'react'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../../constants/responsive'
import { useUpcomingMovies } from '../../../../hooks/useUpcomingMovies'
import { Alert } from 'react-bootstrap'
import LoadingSpinner from '../LoadingSpinner'

const UpcomingMovieSlide = () => {

    const {data, isLoading, isError, error} = useUpcomingMovies();

    if(isLoading) 
        return <LoadingSpinner loading={isLoading}/>
    if(isError) return <Alert>{error.message}</Alert>
    return (
        <div>
            <MovieSlider 
                title="Upcoming Movies"
                movies={data?.results}
                responsive={responsive}
            />
        </div>
    )
}

export default UpcomingMovieSlide