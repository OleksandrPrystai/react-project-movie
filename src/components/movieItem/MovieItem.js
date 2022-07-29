import React from "react";

import styles from './MovieItem.module.css'

export const MovieItem = (props) => {

    const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenresList} = props

    return (
        <div className={styles.movieItem}>
            <div className={styles.movieItemRadius}>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${original_title} poster`}/>
            </div>
            <div className={styles.movieItemDetails}>
                <h2>{original_title}</h2>
                <span>Rating:{vote_average} (total votes: {vote_count})</span>
                <span>{movieGenresList.map(({name,id})=><span key={id}>{name} {`${''}`}</span> )}</span>
                <p>{overview}</p>
                <span>Release date: {release_date}</span>
            </div>

        </div>
    )
}
