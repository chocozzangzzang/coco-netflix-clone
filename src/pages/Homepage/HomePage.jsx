import Banner from "./components/Banner"
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide"
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide"
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide"

// 1. 배너 => popular movie의 첫 번째 영화
// 2. popular movie
// 3. top-rated movie
const HomePage = () => {
    return (
        <div>
            <Banner />
            <PopularMovieSlide />
            <TopRatedMovieSlide />
            <UpcomingMovieSlide />
        </div>
    )
}

export default HomePage