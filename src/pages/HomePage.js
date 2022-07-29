import React, {useEffect, useState} from "react";

import {MovieList} from "../components";
import {genresServices, moviesServices} from "../services";
import styles from './Home.module.css'


const Home = () => {

    const [moviesList, setMoviesList] = useState([]);
    // const [genresList, serGenresList] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            let {results, page, total_pages, total_results,belongs_to_collection} = await moviesServices.getMovies();

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
        const requests = [fetchMovies(), fetchGenres()];

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
            console.log(mergedWhithGenresMovies)

            setMoviesList(mergedWhithGenresMovies)

        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchMoviesData()
    }, [])

    const renderLoadingIndicator = () => (
        <div className={styles.loading}>Loading...</div>
    )

    return (
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator() : <MovieList item={moviesList}/>}
        </div>
    )
}
export {Home}
