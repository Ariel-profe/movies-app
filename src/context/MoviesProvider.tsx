import { FC, ReactElement, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { MoviesContext } from './MoviesContext';

export interface Props {
    children: ReactElement
};

export const MoviesProvider:FC<Props> = ({children}) => {

    const [query, setQuery] = useState('batman');    
    const {data: movies, loading, error} = useFetch(`&s=${query}`);
    
    return (
        <MoviesContext.Provider value={{
            movies,
            loading,
            error,
            query,
            setQuery
        }}>
            {children}
        </MoviesContext.Provider>
    )
};
