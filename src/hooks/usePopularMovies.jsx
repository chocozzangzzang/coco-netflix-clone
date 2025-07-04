import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = async() => {
    return api.get(`/movie/popular`);
}

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey : ['movie-popular'],
        queryFn : fetchPopularMovies,
        select : (result) => result.data,
        staleTime : 5 * 60000,
    })
}