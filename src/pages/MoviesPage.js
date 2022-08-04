import MoviesList from "../components/MoviesList";
import {Outlet, useParams} from "react-router-dom";
import css from '../components/css.css'

export default function MoviesPage(){

    return(
        <div className='mainBox'>
            <MoviesList/>

            <Outlet/>
        </div>
    );
}