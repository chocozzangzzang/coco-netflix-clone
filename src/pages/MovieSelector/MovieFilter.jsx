import { Badge } from "react-bootstrap";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import "./MovieFilter.style.css";

const MovieFilter = () => {

    const { data , isLoading, isError, error } = useMovieGenreQuery();
    console.log("gen", data);

    const filterByGenre = ({id, name}) => {
        alert(`${id} --> ${name}`);
    }

    if(isLoading || isError) return <div className='select-box'>MovieFilter</div>
    return (
        <div className='genre-box'>
            <div className="txt-box">Genre</div>
            {data.map((genre) => (
                <Badge key={genre.id} bg="danger" className="badge-custom"
                    onClick={() => filterByGenre(genre)}
                >{genre.name}</Badge>
            ))}
        </div>
    )
}

export default MovieFilter