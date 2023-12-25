import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/api';
import Notiflix from 'notiflix';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';

const Movies = () => {
  const [films, setFilms] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchFilm = async () => {
      try {
        if (!query) return;
        const data = await getMovieByName(query);
        setFilms(data)
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`);
      }
    }
    searchFilm();
  }, [query])

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery === '') return
    
    setSearchParams({ query: searchQuery });
  }

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <SearchList films={films} />
    </>
  )
}

export default Movies