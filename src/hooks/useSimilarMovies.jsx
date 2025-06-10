import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSimilarMovies = async({ id }) => {
    return api.get(`/movie/${id}/similar`);
}

export const useSimilarMoviesQuery = ({ id }) => {
    return useQuery({
        queryKey : ['similar-movie', id],
        queryFn : () => fetchSimilarMovies({ id }),
        select : (result) => ({
            ...result.data,
            results : result.data.results.filter((result) => result.backdrop_path)
        })
    })
}