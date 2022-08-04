import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "./MoviesListCard";
import {useEffect} from "react";
import {movieActions} from "../redux/slices";
import {useSearchParams} from "react-router-dom";
import css from "./css.css"

export default function MoviesList(){



    const {movies,prev,next} = useSelector(state => state.movies);

    const {results} = movies;

    const dispatch = useDispatch();

    const [query,setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{

        dispatch(movieActions.getAll({page:query.get('page')}))

    },[dispatch,query])

    const prevPage = () => {

        const page = +query.get('page')-1;

        setQuery({page:`${page}`})

    };

    const nextPage = () => {

        const page = +query.get('page')+1;
        setQuery({page:`${page}`})


    };

    return(
        <div>
           <div className='buttonsPage'> {/*disabled*/}
               <button className={'buttonPage'} onClick={nextPage}>Next</button>
               <button className={'buttonPage'}  onClick={prevPage}>Prev</button>

           </div>
            <div className='movielist'>
                {
                    results && results.map(movie =><MoviesListCard key ={movie.id} movie={movie} />)
                }
            </div>


        </div>
    );
}