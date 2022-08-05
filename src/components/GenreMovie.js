import {Link} from "react-router-dom";

import {postURL} from "../constans";
import StarsRating from "./StarsRating";
import css from './css.css'

export default function GenreMovie({genre}) {


    const {original_title, poster_path, vote_average, id} = genre;


    return (
        <div className='movies'>
            <div className='movies1'>
                <div>
                    <Link to={`/movies/${id}`} state={genre}> {original_title} </Link>
                </div>
                <div>
                    <img src={postURL + poster_path} alt="poster"/>
                </div>
                <div>
                    <StarsRating vote={vote_average}/>
                </div>
            </div>

        </div>

    );
}
