import {axiosInstance} from "./Axios.Base";


class MoviesServices {

    async getMovies(moviesPageNumber) {
        const {data} = await axiosInstance.get(`/discover/movie?language=ru&page=${moviesPageNumber}`)
        return data
    }

    async getVideo(movieId) {
        const {data} = await axiosInstance.get(`/movie/${movieId}/videos`)
        return data
    }

    async getDetails(movieId){
        const {data} = await axiosInstance.get(`/movie/${movieId}?language=ru`)
        return data
    }

    async getPopular(){
        const {data} = await axiosInstance.get(`/movie/popular?language=ru&page=1`)
        return data
    }

}

const moviesServices = new MoviesServices();

export {moviesServices}
