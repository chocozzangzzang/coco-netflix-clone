import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieReviews = async ({ id }) => {
    return api.get(`/movie/${id}/reviews`);
} 

export const useMovieReviewQuery = ({ id }) => {
    return useQuery({
        queryKey : ['movie-detail-review', id],
        queryFn : () => fetchMovieReviews({ id }),
        select : (result) => result.data,
        staleTime : 5 * 60000,
    })
}