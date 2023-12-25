import Notiflix from "notiflix"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getTrendingMovies } from "services/api"
import { defaultImg } from "services/defaultImg"

import { Container, Title, List, Item, LinkStyled, Text } from "./MoviesList.styled"

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation();

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const films = await getTrendingMovies();
        setMovies(films);
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`);
      }
    }
    trendingMovies();
  }, [])

  return (
    <main>
      <Container>
      <Title>Trending today</Title>
      <List>
        {movies.results?.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <LinkStyled to={`movies/${id}`} state={{from: location}}>
            <img
              src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg}
              alt={title}
              width={434}
              height={350}
            />
            <Text>{title}</Text>
            </LinkStyled>
          </Item>
        ))}
        </List>
      </Container>
    </main>
  )
}

export default MovieList