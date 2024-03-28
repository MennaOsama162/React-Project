import { createContext, useState, useEffect } from "react";
import axios from 'axios';
let MoviesContext = createContext([]);


export function MoviesContextProvider(props) {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);


    async function getTrendingMedia(mediaType, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
        callback(data.results.slice(0, 10));
    }


    useEffect(() => {
        getTrendingMedia('movie', setTrendingMovies);
        getTrendingMedia('tv', setTrendingTv);
        getTrendingMedia('person', setTrendingPeople);


    }, []);


    return (
        <MoviesContext.Provider value={{ trendingMovies, trendingTv, trendingPeople }}>
            {props.children}
        </MoviesContext.Provider>
    )
}



export default MoviesContext;

