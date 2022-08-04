import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {MovieItem} from "../movieItem";
import styles from './MovieList.module.css'
import {moviesAddAction} from "../../redux";

export const MovieList = ({item}) => {

    const dispatch = useDispatch();
    const {moviesPageNumber} = useSelector(state => state.moviesAddReducer);

    return (
        <div className={styles.listBox}>
            {item.map(item => <div key={item.id}><MovieItem {...item}/></div>)}

            <div className={styles.pageClicker}>
                <img onClick={() => {dispatch(moviesAddAction.dec())}} src="https://img.icons8.com/flat-round/64/000000/left--v1.png" alt=""/>
                <div className={styles.pageClickerNumber}>
                    {moviesPageNumber}
                </div>
                <img onClick={() => {
                    dispatch(moviesAddAction.inc())
                }} src="https://img.icons8.com/flat-round/64/000000/right--v1.png" alt=""/>
            </div>
        </div>

    )
}

