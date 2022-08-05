import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../redux";
import Genre from "./Genre";

export default function GenreBadge(){
    const {genre} = useSelector(state => state.genre);

    const {genres} = genre;

    const dispatch = useDispatch();



    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[])

    return(
        <div>
        <div className={'buttonsGenre'}>
            {genres && genres.map(genre=><Genre  genre={genre}/>)}
        </div>


        </div>
    );
}