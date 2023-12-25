import { useLocation } from "react-router-dom"
import { defaultImg } from "services/defaultImg"

import { Container, List, Item, LinkStyled, Text } from "components/MoviesList/MoviesList.styled";

const SearchList = ({ films }) => {
    const location = useLocation();
    
  return (
      <Container>
          <List>
              {films.results?.map(({ id, title, poster_path }) => (
                  <Item key={id}>
                      <LinkStyled to={`${id}`} state={{ from: location }}>
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
  )
}

export default SearchList