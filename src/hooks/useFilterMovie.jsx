import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchFilteredMovie = async ({ genre, pageCount }) => {
    return api.get(`/discover/movie?language=en-US&page=${pageCount}&with_genres=${genre}`)
}

export const useFilterMovieQuery = ({ genre, pageCount}) => {
    return useQuery({
        queryKey : ['filter', genre, pageCount],
        queryFn : () => fetchFilteredMovie({ genre, pageCount }),
        select : (result) => result.data,
        staleTime : 5 * 60000,
    })
}