import { createContext, Dispatch, SetStateAction } from "react";
import { Search } from "../interfaces/moviesResponse";


interface ContextProps {
    loading: boolean;
    error: {show: boolean, msg: string};
    movies: Search[] | undefined ;
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
};

export const MoviesContext = createContext( {} as ContextProps);