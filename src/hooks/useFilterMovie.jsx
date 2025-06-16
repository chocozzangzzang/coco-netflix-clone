import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchFilteredMovie = async ({ genreId, sortBy, pageCount }) => {
    return api.get(`/discover/movie?language=en-US&page=${pageCount}&with_genres=${genreId}&sort_by=${sortBy}`)
}

export const useFilterMovieQuery = ({ genreId, sortBy, pageCount }) => {
    return useQuery({
        queryKey : ['filter', genreId, sortBy, pageCount],
        queryFn : () => fetchFilteredMovie({ genreId, sortBy, pageCount }),
        select : (result) => result.data,
        staleTime : 5 * 60000,
    })
}