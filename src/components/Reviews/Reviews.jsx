import { getReviews } from "services/api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notiflix from "notiflix";

import { ReviewsList, Item, Name, Info } from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const reviews = async () => {
      try {
        const {results} = await getReviews(movieId);
        setReviews(results)
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`);
      }
    }
    reviews();
  }, [movieId])
  
  return (
    <>
      {reviews.length > 0 ?
        <ReviewsList>
          {reviews?.map(({ author, content, id }) => (
            <Item key={id}>
              <Name>Author: {author}</Name>
              <p>{content}</p>
            </Item>
          ))}
        </ReviewsList>
        : <Info>We don't have any reviews for this movie.</Info>}
    </>
  )
}

export default Reviews