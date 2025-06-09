import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovies = async() => {
    return api.get("/movie/top_rated");
}

export const useTopRatedMovies = () => {
    return useQuery({
        queryKey : ['movie-toprated'],
        queryFn : fetchTopRatedMovies,
        select : (result) => result.data,
})}