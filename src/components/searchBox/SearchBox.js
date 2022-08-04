import React, {useState} from "react";

import styles from './SearchBox.module.css'




const SearchBox = (props) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className={styles.searchDiv}>
            <form onSubmit={handleOnSubmit}>

                <input className={styles.search}
                       type={'search'}
                       placeholder={'Search'}
                       value={searchTerm}
                       onChange={handleOnChange}
                />
            </form>
        </div>
    )
}
export default SearchBox;
