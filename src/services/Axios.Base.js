import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzZjMDg4ZjVlOGJmZTIxMzE4NDQyOGE4NjBiZmQxOCIsInN1YiI6IjYyZTJkZTI5YjAwNDBhMDA1YWQ1YzgyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cdNdoNAI3Q3WwUZYBIwq9bICRLVpXUMeMF4ZRjDXs1s '
    }
})
export {axiosInstance}
