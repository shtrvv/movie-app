import { useEffect, useState, lazy, Suspense} from "react";
import { Route, Routes, useLocation, useParams, Outlet } from "react-router-dom"
import { getMovieById } from "services/api"
import Notiflix from "notiflix";
import { defaultImg } from "services/defaultImg"

import { Info, Container, LinkStyled, Description, DescrInform, SpanStyled, Score, Additional, LinksList, NavLinkStyled } from "./MovieDetails.styled";

const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

const MovieDetails = () => {
    const [data, setData] = useState([])
    const { movieId } = useParams()
    const location = useLocation()
    const backLink = location.state?.from ?? '/';

    useEffect(() => {
        const details = async () => {
            if (!movieId) return;
            try {
                const data = await getMovieById(movieId);
                setData(data)
            } catch (error) {
                Notiflix.Notify.failure(`${error.message}`);
            }
        }
        details();
    }, [movieId])

    return (
      <Container>
        <LinkStyled to={backLink}>↩ Back</LinkStyled>
        {data && (   
        <>
            <Info>
                <img
                    src={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : defaultImg}
                    alt={data.title}
                    width={250}
                    height={350}
                />
                <Description>
                    <h2>{data.title} ({data.release_date?.slice(0, 4)})</h2>
                    <Score><SpanStyled>User score:</SpanStyled> {Number(data.vote_average).toFixed(1) * 10}%</Score>
                    <DescrInform><SpanStyled>Overview:</SpanStyled> {data.overview}</DescrInform>
                    <DescrInform><SpanStyled>Genres:</SpanStyled> {data.genres?.map(({ name }) => name).join(', ')}</DescrInform>
                </Description>
            </Info>
            <div>
                <Additional>Additional information</Additional>
                <LinksList>
                    <li>
                        <NavLinkStyled to='cast'>Cast</NavLinkStyled>
                    </li>
                    <li>
                        <NavLinkStyled to='reviews'>Reviews</NavLinkStyled>
                    </li>
                </LinksList>
                </div>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews/>} />
            </Routes>  
            </Suspense>
        </>
        )} 
    </Container>
  )
}

export default MovieDetails