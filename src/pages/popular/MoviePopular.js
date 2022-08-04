import {moviesServices} from "../../services";
import {useEffect, useState} from "react";


const MoviePopular = () => {


    const [popular, setPopular] = useState([]);


    const fetchPopular = async () => {
        try {
            const response = await moviesServices.getPopular()
            console.log(response)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPopular()
    }, [])

}

export default MoviePopular
