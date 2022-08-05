import css from "./css.css"
import {postURL} from "../constans";
import StarsRating from "./StarsRating";

import {Link} from "react-router-dom";


export default function MoviesListCard({movie}){


    const {original_title,poster_path,vote_average,id} = movie
    return(
        <div className='movies'>
            <div className='movies1'>
                <div>
                   <Link to={`/movies/${id}`} state = {movie}> {original_title} </Link>
                </div>

                <div>
                    <img src={postURL+poster_path} alt="poster"/>
                </div>

                <div>

                    <StarsRating vote={vote_average}/>
                </div>
            </div>

        </div>

    );
}