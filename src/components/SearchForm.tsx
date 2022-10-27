import { useContext } from "react"
import { MoviesContext } from '../context/MoviesContext';


export const SearchForm = () => {

  const {query, setQuery, error} = useContext(MoviesContext);
  
  return (
    <form 
      className="search-form"
      onSubmit={(e) => e.preventDefault()}
    >
     <h2>search movies</h2>
     <input
      className="form-input"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
    {error.show && <div className="error">{error.msg}</div>}
    </form>
  )
}
