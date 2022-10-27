import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MoviesContext } from '../context/MoviesContext';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

export const MoviesList = () => {

    const {loading, movies, error} = useContext(MoviesContext);

    if(loading) return <div className='loading' />

  return (
    <section className="movies">
      {
        movies?.map( ({imdbID, Title, Year, Poster}) => (
          <Link key={imdbID} to={`/movies/${imdbID}`} className='movie'>
            <article>
              <img src={Poster === 'N/A' ? url : Poster} alt={Title} />
              <div className="movie-info">
                <h4 className='title'>{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        ))
      }
    </section>
  )
}
