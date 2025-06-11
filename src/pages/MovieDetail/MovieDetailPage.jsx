import { Alert, Badge, Button, Col, Container, Modal, Row } from "react-bootstrap"
import "./MovieDetailPage.style.css";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import MovieReviewPage from "../MovieReviewPage/MovieReviewPage";
import RelatedMoviesPage from "../RelatedMovies/RelatedMoviesPage";
import { useMovieReviewQuery } from "../../hooks/useMovieReview";
import { useState } from "react";
import { useSimilarMoviesQuery } from "../../hooks/useSimilarMovies";
import { useMovieTrailersQuery } from "../../hooks/useMovieTrailers";
import YouTube from "react-youtube";

const MovieDetailPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useMovieDetail({ id });
    
    const [ showModal, setShowModal ] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    // console.log(data);
    const { data : reviews } = useMovieReviewQuery({ id });
    const { data : similars } = useSimilarMoviesQuery({ id });
    const { data : trailers } = useMovieTrailersQuery({ id });
    console.log(trailers)
    const [ reviewOrRelated, setReviewOrRelated ] = useState(true);
    const handleBtnState = () => {
        setReviewOrRelated((prev) => !prev);
    }
    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <Alert>{error.message}</Alert>
    return (
        <div className="detail-wrapper">
            <Modal show={showModal} 
                    onHide={handleClose}
                    dialogClassName="modal-custom"
                    centered
                    keyboard={false}>
                <Modal.Body>
                    <div className="youtube-box">
                        <YouTube videoId={trailers?.results[0].key}
                        />
                    </div>
                </Modal.Body>
            </Modal>
             <div className="detail-container">
                <Container>
                    <Row>
                        <Col className="detail-col1" lg={6} xs={12}>
                            <img width={400} height={600}
                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`} alt={data?.title} />
                            <Button pill variant="outline-info" className="badge-custom" onClick={handleShow}>예고편 보기</Button>
                        </Col>
                        <Col className="detail-col2" lg={6} xs={12}>
                            <div className="badges">
                            {
                                data?.genres.map((genre) => (
                                    <Badge key={genre.id} bg="danger" className="badge-custom">{genre.name}</Badge>
                                ))
                            }
                            </div>
                            <div style={{ fontWeight : '500', fontSize : '42px'}}>{data?.title}</div>
                            <div>{data?.tagline}</div>
                            <div className="sub-infos">
                                <div><img width={40} src="/IMDB_Logo_2016.svg.png"/> {data?.vote_average.toFixed(2)}</div>
                                <div><img src="/people.svg" /> {data?.popularity.toFixed(2)}</div>
                                <div>{data?.adult ? <img width={25} src="/adult.svg"/> : <img width={25} src="/all.svg" />}</div>
                            </div>
                            <hr />
                            <div className="overview-box">{data?.overview}</div>
                            <hr />
                            <div className="others-box">
                                <div><Badge pill bg="danger" className="badge-custom">Revenue</Badge> $ {data?.revenue.toLocaleString('en-US')}</div>
                                <div><Badge pill bg="danger" className="badge-custom">Budget</Badge> $ {data?.budget.toLocaleString('en-US')}</div>
                                <div><Badge pill bg="danger" className="badge-custom">Release date</Badge> {data?.release_date}</div>
                                <div><Badge pill bg="danger" className="badge-custom">Run time</Badge> {data?.runtime} 분</div>
                            </div>
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