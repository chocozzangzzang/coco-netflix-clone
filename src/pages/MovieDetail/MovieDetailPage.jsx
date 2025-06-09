import { Alert, Badge, Col, Container, Row } from "react-bootstrap"
import "./MovieDetailPage.style.css";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDetail";

const MovieDetailPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useMovieDetail({ id });

    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <Alert>{error.message}</Alert>
    return (
        <div className="detail-container">
            <Container>
                <Row>
                    <Col className="detail-col1" lg={6} xs={12}>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`} alt={data?.title} />
                    </Col>
                    <Col className="detail-col2" lg={6} xs={12}>
                        <div className="badges">
                        {
                            data?.genres.map((genre) => (
                                <Badge key={genre.id} bg="danger">{genre.name}</Badge>
                            ))
                        }
                        </div>
                        <div>{data?.title}</div>
                        <div>{data?.tagline}</div>
                        <div>인기도 : {data?.popularity.toFixed(2)}</div>
                        <div>{data?.overview}</div>
                        <div><Badge pill bg="danger" className="badge-custom">Revenue</Badge> $ {data?.revenue.toLocaleString('en-US')}</div>
                        <div><Badge pill bg="danger" className="badge-custom">Budget</Badge> $ {data?.budget.toLocaleString('en-US')}</div>
                        <div><Badge pill bg="danger" className="badge-custom">Release date</Badge> {data?.release_date}</div>
                        <div><Badge pill bg="danger" className="badge-custom">Run time</Badge> {data?.runtime}</div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default MovieDetailPage