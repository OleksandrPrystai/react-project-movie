import React from "react";
import styles from './LayoutWrap.module.css'

const PageLayout = ({children}) => {

    return (
        <div className={styles.globalWrapper}>

            <header className={styles.globalWrapperHeader}>
                <img src="https://img.icons8.com/ios-filled/50/cfcfcf/tv-show.png" alt=''/>
                <h1>AlexarFilms</h1>
                <div></div>

            </header>
            <main className={styles.globalWrapperMain}>
                {children}

            </main>
            {/*<footer>footer data</footer>*/}

        </div>
    )
}
export {PageLayout}
