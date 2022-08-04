import React from "react";
import {Link} from "react-router-dom";

import styles from './MovieItem.module.css'



export const MovieItem = ({original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenresList, title, id}) => {
    return (
        <div className={styles.linkStyle}>
            <Link to={`/moviedetails/${id}`}>
                <div className={styles.movieItem}>
                    <div className={styles.movieItemRadius}>
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${original_title} poster`}/>
                    </div>
                    <div className={styles.movieItemDetails}>
                        <h2>{title}</h2>
                        <span>Рейтинг:{vote_average} (всього голосів: {vote_count})</span>
                        <span>{movieGenresList.map(({name, id}) => <span key={id}>{name} {`${''}`}</span>)}</span>
                        <p>{overview}</p>
                        <span>Дата релізу: {release_date}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
