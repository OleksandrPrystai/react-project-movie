import React from "react";
import {MovieItem} from "../movieItem";

import styles from './MovieList.module.css'

export const MovieList = ({item}) => {

    console.log(item, 'from MovieList')
    return (
        <div className={styles.listBox}>
            {
                item.map(item => <MovieItem key={item.id} {...item}/>)
            }

        </div>
    )
}

