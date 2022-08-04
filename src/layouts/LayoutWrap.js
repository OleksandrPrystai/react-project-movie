import React from "react";
import {Link} from "react-router-dom";

import styles from './LayoutWrap.module.css'
import SearchBox from "../components/searchBox/SearchBox";

const PageLayout = ({children}) => {


    return (
        <div className={styles.globalWrapper}>
            <header className={styles.globalWrapperHeader}>
                <img src="https://img.icons8.com/ios-filled/50/cfcfcf/tv-show.png" alt='logo'/>
                <Link to={'/'}>
                    <h1>AlexarFilms</h1>
                </Link>
                <SearchBox/>
            </header>
            <main className={styles.globalWrapperMain}>{children}</main>
        </div>
    )
}
export {PageLayout}
