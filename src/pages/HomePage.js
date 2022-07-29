import React, {useEffect, useState} from "react";

import {MovieList} from "../components";
import {moviesServices} from "../services";
import styles from './Home.module.css'


const Home = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            let {results, page, total_pages, total_results} = await moviesServices.getMovies();

            setMoviesList(results)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const renderLoadingIndicator = () => (
        <div className={styles.loading}>Loading...</div>
    )

    return (
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator() : <MovieList item={moviesList}/>}
            {/*{true ? renderLoadingIndicator() : <MovieList/>}*/}

        </div>
    )
}
export {Home}
