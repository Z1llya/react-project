import {axiosServices} from "./axios-services";
import {urls} from "../constans";


const movieServices = {
    getAll: (page=1)=> axiosServices.get(urls.movie,{params: {page}}),


}


export {
    movieServices,
}