import {useNavigate} from "react-router-dom";

import css from './css.css'
import UserInfo from "./UserInfo";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='conteinerHeder'>
        <div className='userCircle' ><UserInfo/></div>
        <div className='header'>

            <div >
                <button className='buttonH' onClick={()=>navigate('movies')}>Movies</button>
            </div>
            <div><button className='buttonH' onClick={()=>navigate('genre')}>Genre</button></div>

        </div>
        </div>
    );
};

export {Header};