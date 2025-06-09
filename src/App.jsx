import { Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import HomePage from './pages/Homepage/HomePage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import NotFoundPage from './pages/NotFoundpage/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. 홈페이지 -> /
// 2. 영화 전체 리스트 페이지 -> /movies
// 3. 영화 디테일 페이지 -> /movies/:id
// --> 추천 영화 /movies/:id/recommendation
// --> 리뷰 /movies/:id/reviews
function App() {

  return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>

          {/* <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
