import { SearchForm } from "../components/SearchForm"
import { MoviesList } from "../components/MoviesList"


export const Home = () => {
  return (
    <main>
      <SearchForm />
      <MoviesList />
    </main>
  )
}
