import {useNavigate} from "react-router-dom";

import css from './css.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div >
                <button className='buttonH' onClick={()=>navigate('movies')}>Movies</button>
            </div>
            <div><button className='buttonH' onClick={()=>navigate('genre')}>Genre</button></div>
        </div>
    );
};

export {Header};