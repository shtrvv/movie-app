import { useEffect, useState, Suspense, useRef} from "react";
import { useLocation, useParams, Outlet } from "react-router-dom"
import { getMovieById } from "services/api"
import Notiflix from "notiflix";
import { defaultImg } from "services/defaultImg"

import { Info, Container, LinkStyled, Description, DescrInform, SpanStyled, Score, Additional, LinksList, NavLinkStyled } from "./MovieDetails.styled";

const MovieDetails = () => {
    const [data, setData] = useState([])
    const { movieId } = useParams()
    const location = useLocation()
    const backlink = useRef(location.state?.from ?? '/');

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
        <LinkStyled to={backlink.current}>↩ Back</LinkStyled>
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
            </Suspense>
        </>
        )} 
    </Container>
  )
}

export default MovieDetails