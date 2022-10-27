import { useEffect, useState } from "react";
import { MovieResponse } from '../interfaces/movieResponse';
import { Search } from "../interfaces/moviesResponse";

export const api_endpoint = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}`;

 export const useFetch = (urlParams : string, ) => {

    const [error, setError] = useState({show: false, msg: ''});
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Search[] | any | undefined>();

    const fetchMovies = async(url:string) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            if(data.Response === 'True'){
                setData(data.Search || data as MovieResponse);
                setError({show: false, msg:''});
            }else{
                setError({show: true, msg: data.Error});
            }
            setLoading(false);
        } catch (error) {
            console.log(error);    
        }
    };

    useEffect(() => {
      fetchMovies(`${api_endpoint}${urlParams}`);
    }, [urlParams]);
    
    return {
        error,
        loading,
        data
    }

  };