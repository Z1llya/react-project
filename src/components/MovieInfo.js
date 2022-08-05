import {postURL} from "../constans";
import StarsRating from "./StarsRating";

export default function MovieInfo({movie}){

    const {original_title,overview,poster_path,vote_average} = movie;


    return(
        <div>
            <h2>{original_title}</h2>
            <img src={postURL+poster_path} alt="poster"/>
            <p/>
            <h3>Rates {vote_average}  <StarsRating vote={vote_average}/></h3>
            <em>{overview}</em>
        </div>
    );
}