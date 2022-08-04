import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {MovieList} from "../../components";
import {genresServices, moviesServices} from "../../services";
import styles from './Home.module.css'



const Home = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null)
    const {moviesPageNumber} = useSelector(state => state.moviesAddReducer);

    const fetchMovies = async (params) => {
        try {
            setIsLoading(true)
            let {results} = await moviesServices.getMovies(params);
            return results
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchGenres = async () => {
        try {
            const {genres} = await genresServices.getGenres()
            return genres
        } catch (e) {
            console.error(e)
        }
    }

    const fetchMoviesData = async () => {
        const requests = [fetchMovies(moviesPageNumber), fetchGenres()];
        try {
            setIsLoading(true)
            const [movies, genres] = await Promise.all(requests)
            const mergedWhithGenresMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))
                return {
                    ...movie,
                    movieGenresList,
                }
            })
            setMoviesList(mergedWhithGenresMovies)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMoviesData()
    }, [moviesPageNumber])

    const renderLoadingIndicator = () => (
        <div className={styles.loading}>Loading...</div>
    )

    return (
        <div className={styles.homePage}>
            {isLoading || isLoading === null ? renderLoadingIndicator() : <MovieList item={moviesList}/>}
        </div>
    )
}
export {Home}
