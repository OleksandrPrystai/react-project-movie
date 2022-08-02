import React from "react";

import {MovieItem} from "../movieItem";
import styles from './MovieList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {moviesAddAction} from "../../redux";

export const MovieList = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.listBox}>

            {
                item.map(item => <MovieItem key={item.id} {...item}/>)
            }
            <div className={styles.pageClicker}>
                <img onClick={()=>{dispatch(moviesAddAction.dec())}} src="https://img.icons8.com/flat-round/64/000000/left--v1.png"/>
                <img onClick={()=>{dispatch(moviesAddAction.inc())}} src="https://img.icons8.com/flat-round/64/000000/right--v1.png"/>

            </div>

        </div>
    )
}

