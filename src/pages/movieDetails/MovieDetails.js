import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {moviesServices} from "../../services";
import styles from './MovieDetails.module.css'
// import MoviePopular from "../popular/MoviePopular";

const MovieDetails = () => {

    const {id} = useParams();
    const [films, setFilms] = useState([]);
    const [details, setDetails] = useState([])
    console.log(details)

    const {title, original_title, vote_average, release_date, runtime, genres, overview, poster_path, production_countries} = details
    const fetchDetails = async () => {
        try {
            const response = await moviesServices.getDetails(id)
            setDetails(response)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchTrailer = async () => {
        try {
            const trailer = await moviesServices.getVideo(id)
            const filmYoutube = trailer.results[0].key
            setFilms(filmYoutube)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [])

    useEffect(() => {
        fetchTrailer()
    }, [])



    return (
        <div>
            <div className={styles.detailsContainer}>
                <div className={styles.filmName}>
                    <h1>{title}</h1>
                    <h3>{original_title}</h3>
                </div>
                <div className={styles.allInfo}>
                    <div className={styles.poster}>
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${poster_path} poster`}/>
                    </div>
                    <div className={styles.allDetails}>
                        <h3>Рейтинги: {vote_average}/10 </h3>
                        <h3>Дата виходу: {release_date} </h3>
                        <h3>Тривалість: {runtime}хв </h3>
                        <h3>Жанри: {genres && genres.map(name=>`${name.name} ${''}`)}</h3>
                        <h3>Країна: {production_countries && production_countries.map(name =>`${name.name} ${''}`)}</h3>






                    </div>
                </div>
                <div className={styles.overview}>
                    <h2>Про що фільм «{title}»:</h2>
                    <p>{overview}</p>
                </div>
                <div className={styles.video}>
                    <iframe width="800" height="520" src={`https://www.youtube.com/embed/${films}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
                {/*<MoviePopular/>*/}

            </div>

        </div>
    )
}
export default MovieDetails
