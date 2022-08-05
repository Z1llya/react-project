import MoviesList from "../components/MoviesList";
import css from '../components/css.css'

import {Outlet} from "react-router-dom";


export default function MoviesPage(){

    return(
        <div className='mainBox'>
            <MoviesList/>

            <Outlet/>
        </div>
    );
}