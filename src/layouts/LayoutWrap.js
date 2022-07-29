import React from "react";
import styles from './LayoutWrap.module.css'

const PageLayout = ({children}) => {

    return (
        <div className={styles.globalWrapper}>

            <header>header data</header>
            <main>{children}</main>
            <footer>footer data</footer>

        </div>
    )
}
export {PageLayout}
