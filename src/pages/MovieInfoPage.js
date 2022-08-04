import {useLocation, useParams} from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import {useEffect, useState} from "react";
import {axiosServices} from "../services/axios-services";
import {getMovie, movieServices} from "../services/movie-services";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices";
import {postURL} from "../constans";
import StarsRating from "../components/StarsRating";

export default function MovieInfoPage(){


    const location = useLocation();


    const movie = location.state


    return(
        <div>
             <MovieInfo movie={movie}/>

        </div>
    );
}