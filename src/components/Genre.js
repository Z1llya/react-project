import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../redux/slices/genreSlice";
import {Link} from "react-router-dom";

export default function Genre({genre}){
    const {name,id} = genre;




    return(
        <div >
            <Link to={`/genre/${id}`} state={genre}> <button className={'buttonGenre'}>{name}</button> </Link>
        </div>
    );
}