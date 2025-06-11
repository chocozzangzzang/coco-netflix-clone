import "./MovieReviewPage.style.css";
import MovieReviewBox from './MovieReviewBox';

const MovieReviewPage = ({ reviews }) => {

    return (
        <div className='movie-review-wrapper'>
            {
                reviews?.map((review, index) => (
                    <MovieReviewBox key={index} review={review} />
                ))
            }
        </div>
    )
}

export default MovieReviewPage