
import { Link, useParams } from "react-router-dom"
import { useFetch } from '../hooks/useFetch';

export const SingleMovie = () => {

  const {id} = useParams();

  const {data: movie, error, loading} = useFetch(`&i=${id}`);

  if(loading){
    return <div className='loading' />
  }

  if(error.show){
    return <div className='page-error'>
      <h1>{error.msg}</h1>
      <Link to='/' className='btn'>
        back to movies
      </Link>
    </div>
  }

  const {Poster, Title, Plot, Year} = movie;

  return (
    <section className='single-movie'>
          <img src={Poster} alt={Title} />
          <div className="single-movie-info">
            <h2>{Title}</h2>
            <p>{Plot}</p>
            <h4>{Year}</h4>
            <Link to='/' className='btn'>
              back to movies
            </Link>
          </div>
    </section>
  )
}
