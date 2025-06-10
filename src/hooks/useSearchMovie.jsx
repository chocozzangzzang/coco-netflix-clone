import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchMovie = async({ keyword, pageCount }) => {
    return keyword ? 
    api.get(`/search/movie?query=${keyword}&page=${pageCount}`) : 
    api.get(`/movie/popular?page=${pageCount}`);
}

export const useSearchMovieQuery = ({ keyword, pageCount }) => {
    return useQuery({
        queryKey : ['movie-search', keyword, pageCount],
        queryFn : () => fetchSearchMovie({ keyword, pageCount }),
        select : (result) => result.data,
        staleTime : 5 * 60000,
    })
}