import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieDetail = async({ id }) => {
    // console.log(await api.get(`/movie/${id}`));
    return api.get(`/movie/${id}`);
}

export const useMovieDetail = ({ id }) => {
    return useQuery({
        queryKey : ['movie-detail', id],
        queryFn : () => fetchMovieDetail({ id }),
        select : (result) => result.data,
        staleTime : 5 * 60000,
    })
}