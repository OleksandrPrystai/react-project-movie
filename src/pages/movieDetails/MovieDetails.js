import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {moviesServices} from "../../services";
import styles from './MovieDetails.module.css'

const MovieDetails = () => {

    const {id} = useParams();
    const [films, setFilms] = useState([]);

    const fetchTrailer = async () => {
        try {
            const trailer = await moviesServices.getMovieDetailsById(id)
            console.log(trailer.results[0])
            const filmYoutube = trailer.results[0].key
            setFilms(filmYoutube)
        } catch (e) {
            console.error(e)
        }

    }

    useEffect(() => {
        fetchTrailer()
    }, [])

    return (
        <div>
            <div className={styles.video}>
                <iframe width="800" height="500" src={`https://www.youtube.com/embed/${films}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                </iframe>
            </div>


        </div>
    )
}
export default MovieDetails
