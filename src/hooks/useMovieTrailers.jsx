import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieTrailers = async({ id }) => {
    return api.get(`/movie/${id}/videos`);
}

export const useMovieTrailersQuery = ({ id }) => {
    return useQuery({
        queryKey : ['movie-trailers', id],
        queryFn : () => fetchMovieTrailers({ id }),
        select : (result) => result.data,
    })
}