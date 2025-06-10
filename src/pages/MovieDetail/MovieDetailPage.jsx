import { Alert, Badge, Button, Col, Container, Row } from "react-bootstrap"
import "./MovieDetailPage.style.css";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import MovieReviewPage from "../MovieReviewPage/MovieReviewPage";
import RelatedMoviesPage from "../RelatedMovies/RelatedMoviesPage";
import { useMovieReviewQuery } from "../../hooks/useMovieReview";
import { useState } from "react";
import { useSimilarMoviesQuery } from "../../hooks/useSimilarMovies";

const MovieDetailPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useMovieDetail({ id });
    const { data : reviews } = useMovieReviewQuery({ id });
    const { data : similars } = useSimilarMoviesQuery({ id });
    const [ reviewOrRelated, setReviewOrRelated ] = useState(true);
    const handleBtnState = () => {
        setReviewOrRelated((prev) => !prev);
    }
    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <Alert>{error.message}</Alert>
    return (
        <div className="detail-wrapper">
             <div className="detail-container">
                <Container>
                    <Row>
                        <Col className="detail-col1" lg={6} xs={12}>
                            <img width={400} height={600}
                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`} alt={data?.title} />
                        </Col>
                        <Col className="detail-col2" lg={6} xs={12}>
                            <div className="badges">
                            {
                                data?.genres.map((genre) => (
                                    <Badge key={genre.id} bg="danger">{genre.name}</Badge>
                                ))
                            }
                            </div>
                            <div style={{ fontWeight : '500', fontSize : '42px'}}>{data?.title}</div>
                            <div>{data?.tagline}</div>
                            <div>인기도 : {data?.popularity.toFixed(2)}</div>
                            <hr />
                            <div>{data?.overview}</div>
                            <hr />
                            <div><Badge pill bg="danger" className="badge-custom">Revenue</Badge> $ {data?.revenue.toLocaleString('en-US')}</div>
                            <div><Badge pill bg="danger" className="badge-custom">Budget</Badge> $ {data?.budget.toLocaleString('en-US')}</div>
                            <div><Badge pill bg="danger" className="badge-custom">Release date</Badge> {data?.release_date}</div>
                            <div><Badge pill bg="danger" className="badge-custom">Run time</Badge> {data?.runtime} 분</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <div className="btn-box">
                    <Button variant={reviewOrRelated ? "outline-danger" : "outline-light"}
                        onClick={handleBtnState} disabled={reviewOrRelated}
                        style={{width : '200px'}}>REVIEWS ({reviews?.total_results})</Button>
                    <Button variant={reviewOrRelated ? "outline-light" : "outline-danger"}
                        onClick={handleBtnState} disabled={!reviewOrRelated}
                        style={{width : '200px'}}>SIMILAR MOVIES ({similars?.results.length})</Button>
                </div>
                <div style={{display : 'flex', justifyContent : 'center'}}>
                {   reviewOrRelated ?
                    <MovieReviewPage reviews={reviews?.results}/> :
                    <RelatedMoviesPage 
                        similars={similars?.results}
                    />
                }
                </div>

            </div>
        </div>
       

    )
}

export default MovieDetailPage