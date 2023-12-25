import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "services/api";
import Notiflix from "notiflix";
import { defaultImg } from "services/defaultImg";

import { CastList, Item, Name, Charachter, SpanStyled } from "./Cast.styled";

const Cast = () => {
  const { movieId } = useParams()
  const [cast, setCast] = useState([])

  useEffect(() => {
    const info = async () => {
      try {
        const data = await getCast(movieId);
        setCast(data)
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`);
      }
    }
    info();
  }, [movieId])

  return (
    <>
      <CastList>
        {cast.cast?.map(({ id, name, character, profile_path }) => (
          <Item key={id}>
            <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultImg}
              alt={name}
              width={250}
              height={330}
            />
            <Name>{name}</Name>
            <Charachter><SpanStyled>Character:</SpanStyled> {character}</Charachter>
          </Item>
        ))}
      </CastList>
    </>
  )
}

export default Cast