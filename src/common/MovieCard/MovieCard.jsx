import { Badge } from "react-bootstrap"
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ( { movie }) => {

    const { data : genre_data } = useMovieGenreQuery();

    const showGenre = (genre_id_list) => {
        if(!genre_data) return [];
        const genreNameList = genre_id_list.map((id) => {
            const genreObj = genre_data.find((genre) => genre.id === id);
            return genreObj.name;
        })
        return genreNameList;
    }

    return (
        <div
            style={{
                backgroundImage : "url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2" + `${movie?.poster_path}` + ")"}}
            className="movie-card"
        >
            <div className="overlay">
                <p>{movie?.title}</p>
                <div className="badge-list">{showGenre(movie.genre_ids).map((genre, index) => 
                    <Badge key={index} bg="danger">{genre}</Badge>)}</div>
                <div className="text-box">
                    <div>⭐ {(movie?.vote_average).toFixed(2)}</div>
                    <div>
                        {movie?.popularity >= 300
                        ? "🏆 "
                        : movie?.popularity >= 150
                        ? "🔥 "
                        : movie?.popularity >= 80
                        ? "👍 "
                        : movie?.popularity >= 30
                        ? "👀 "
                        : "💤 "}
                        {(movie?.popularity).toFixed(2)}</div>
                    <div style={{
                        color: movie?.adult ? "red" : "green",
                    }}
                    >{movie?.adult? "🔞 Over 18" : "🟢 Under18"}</div>
                </div>
            </div>

        </div>
    )
}

export default MovieCard