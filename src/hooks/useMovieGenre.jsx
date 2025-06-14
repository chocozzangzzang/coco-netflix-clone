import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = async() => {
    return api.get("/genre/movie/list");
}

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey : ['movie-genre'],
        queryFn : fetchMovieGenre,
        select : (result) => result.data.genres,
        staleTime : 5 * 60000,
    })
}