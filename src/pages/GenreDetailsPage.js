import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {genreActions} from "../redux/slices/genreSlice";
import GenreMovie from "../components/GenreMovie";

import css from '../components/css.css'

export default function GenreDetailsPage(){

    const {genre} = useSelector(state => state.genre);

    const {results} = genre;

    const location = useLocation();

    const {id} = location.state;

    const dispatch = useDispatch();



    useEffect(()=>{
        dispatch(genreActions.setGenre({id:id}))
    },[]);




    return(<div>


        <div className={'movielist'}>
            {
                results && results.map(genre=><GenreMovie genre={genre}/>)
            }

        </div>
    </div>
    );
}