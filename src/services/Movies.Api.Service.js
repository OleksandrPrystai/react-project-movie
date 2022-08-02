import React from "react";
import {axiosInstance} from "./Axios.Base";
import {useSelector} from "react-redux";


class MoviesServices {



    async getMovies(moviesPageNumber) {
        const {data} = await axiosInstance.get(`/discover/movie?language=ru&page=${moviesPageNumber}`)
        return data
    }

    async getMovieDetailsById(movieId) {
        const {data} = await axiosInstance.get(`/movie/${movieId}`)
        return data
    }
}


const moviesServices = new MoviesServices();

export {moviesServices}
