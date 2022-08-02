import React from "react";
import styles from './LayoutWrap.module.css'

const PageLayout = ({children}) => {

    return (
        <div className={styles.globalWrapper}>

            <header>header data</header>
            <main className={styles.globalWrapperMain}>{children}
                <img src="" alt=""/>
            </main>
            <footer>footer data</footer>

        </div>
    )
}
export {PageLayout}
