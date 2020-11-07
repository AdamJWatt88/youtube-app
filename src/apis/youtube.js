import axios from 'axios'

const KEY = 'AIzaSyCbYy8s8-GrE_vjEuWTi749K_nbN4Mm4Ag'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        type: 'video',
        key: KEY
    }
})