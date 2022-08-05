import {useLocation} from "react-router-dom";

import MovieInfo from "../components/MovieInfo";

export default function MovieInfoPage(){


    const location = useLocation();


    const movie = location.state


    return(
        <div>
             <MovieInfo movie={movie}/>

        </div>
    );
}