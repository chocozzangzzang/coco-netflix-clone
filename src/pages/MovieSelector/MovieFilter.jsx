import { Badge } from "react-bootstrap";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import "./MovieFilter.style.css";

const MovieFilter = ({ genreName, setGenreName, setGenreId }) => {

    const { data , isLoading, isError } = useMovieGenreQuery();

    const filterByGenre = ({ name, id }) => {
        setGenreName(name)
        setGenreId(id);
    }

    if(isLoading || isError) return <div className='select-box'>MovieFilter</div>
    return (
        <div className='genre-box'>
            <div className="txt-box">Genre{genreName? `: ${genreName}` : ""}</div>
            {data.map((genre) => (
                <Badge key={genre.id} bg="danger" className="badge-custom"
                    onClick={() => filterByGenre(genre)}
                >{genre.name}</Badge>
            ))}
        </div>
    )
}

export default MovieFilter