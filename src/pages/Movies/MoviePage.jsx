import { Alert, Col, Container, Row } from "react-bootstrap";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie"
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard.jsx"
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import "./MoviePage.style.css";
import MovieFilter from "../MovieSelector/MovieFilter.jsx";
import MovieSorter from "../MovieSelector/MovieSorter.jsx";
import { useFilterMovieQuery } from "../../hooks/useFilterMovie.jsx";

// 1. Navbar의 Movies를 클릭해서 이동 -> 키워드가 없음 --> popular
// 2. 키워드로 검색한 경우 -> 관련된 영화들만 보여줌

// 1. 페이지네이션 설치
// 2. 페이지 state를 만들어줌
// 3. 페이지네이션 클릭할 때마다 페이지 바꿈
// 4. page 값이 바뀔 때 마다 useSearchMovie에 page까지 바꿔서 fetch

/*
    해야할 일
    - 카드 클릭 -> 디테일 페이지
    - 디테일 페이지 구현 o -> 아직 css는 x
    -- 영화 포스터 https://www.themoviedb.org/t/p/w300_and_h450_bestv2/poster_path
    -- 영화 제목, 장르, 인기도, 줄거리, 예산 (, 단위), 개봉일
    - 리뷰 페이지 (접기 더보기 기능) o
    - 추천 영화 o -> 유사 영화로 변경
    - 예고편 o
    - 인기순 정렬
    - 장르별 필터링
    ---->>> 배포
*/
const MoviePage = () => {
    const [ query, setQuery ] = useSearchParams();
    const keyword = query.get('keyword'); 
    const [ pageCount, setPageCount ] = useState(1);
    const [ genre, setGenre ] = useState("");

    const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, pageCount });
    const { data : filtered } = useFilterMovieQuery({ genre, pageCount });
    
    const handlePageClick = ({selected}) => {
        setPageCount(selected + 1);
    }

    useEffect(() => {
        setPageCount(1);
    }, [genre]);
    
    if(isLoading) return <h1>Loading....</h1>
    if(isError) return <Alert>{error.message}</Alert>
    return (
            <Container>
                <Row>
                    <Col lg={4} xs={12}>
                        <div className="sidebar-wrapper">
                            <MovieSorter />
                            <MovieFilter genre={genre} setGenre={setGenre}/>
                        </div>
                    </Col>
                    <Col lg={8} xs={12}>
                        <Row className="g-4">
                        {(filtered? filtered : data)?.results.map((movie, index) =>
                            (<Col key={index} lg={4} xs={12}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}                       
                        </Row>
                        <div className="pagination-bar">   
                            <ReactPaginate
                            nextLabel="NEXT >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={2}
                            pageCount={(filtered? filtered : data)?.total_pages} // 전체 페이지
                            previousLabel="< PREV"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                            forcePage={pageCount - 1}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default MoviePage