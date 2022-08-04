import {axiosServices} from "./axios-services";
import {urls} from "../constans";


const genreServices = {
    getAll: ()=> axiosServices.get(urls.genre),
    setGenre: (id)=> axiosServices.get(`${urls.genreMovie}+${id}`)


}

export {
    genreServices
}