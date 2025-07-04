import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchUpcomingMovies = async() => {
    return api.get("/movie/upcoming")
}

export const useUpcomingMovies = () => {
    return useQuery({
        queryKey : ['movie-upcoming'],
        queryFn : fetchUpcomingMovies,
        select : (result) => result.data,
        staleTime : 5 * 60000,
    })
}