
const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movie:'/discover/movie',
    genre:'/genre/movie/list',
    movieById:'/movie',
    genreMovie:'discover/movie?sort_by=popularity.desc&with_genres='
}

const postURL = 'https://image.tmdb.org/t/p/w500/'

export {
    baseURL,
    urls,
    postURL
}
