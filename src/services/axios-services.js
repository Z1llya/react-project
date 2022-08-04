import axios from "axios";
import {baseURL} from "../constans";

const axiosServices = axios.create({baseURL});

axiosServices.interceptors.request.use((config)=>{
    const access = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDk3NTgzYTc0ZWUxNDEzZGFkNTE2ZGIzMzljYWM2YyIsInN1YiI6IjYyZTc4MGY3N2NhYTQ3MDA1YjMzZjcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.INsizA_liEea6KVyiMEkfcQx18XrZREs3TBv4dNKH5Y"

    if(access){
        config.headers.Authorization =` Bearer ${access}`
    }
    return config
})


export {
    axiosServices
}