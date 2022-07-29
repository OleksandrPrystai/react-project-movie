import {axiosInstance} from "./Axios.Base";

class MoviesServices {
    async getMovies() {
        const {data} = await axiosInstance.get('/discover/movie?language=ru')
        return data
    }

    async getMovieDetailsById(movieId) {
        const {data} = await axiosInstance.get(`/movie/${movieId}`)
        return data
    }
}

const moviesServices = new MoviesServices();
// const fetchSomeData = () => moviesServices.getMovieDetailsById()

export {moviesServices}
