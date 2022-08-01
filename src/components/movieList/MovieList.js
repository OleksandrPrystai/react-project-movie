import React from "react";

import {MovieItem} from "../movieItem";
import styles from './MovieList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {moviesAddAction} from "../../redux";

export const MovieList = ({item}) => {

    const dispatch = useDispatch();
    console.log(useSelector(state => state));

    return (
        <div className={styles.listBox}>

            {
                item.map(item => <MovieItem key={item.id} {...item}/>)
            }
            <div className={styles.pageClicker}>
                <button onClick={() => {
                    dispatch(moviesAddAction.inc())
                }}>inc
                </button>


            </div>

        </div>
    )
}

