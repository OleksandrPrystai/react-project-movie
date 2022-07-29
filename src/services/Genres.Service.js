import {axiosInstance} from "./Axios.Base";

class GenresService {
    async getGenres() {
        const {data} = await axiosInstance.get('/genre/movie/list?language=ru')
        return data
    }
}

const genresServices = new GenresService();


export {genresServices}
