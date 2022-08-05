import {Route,Routes} from "react-router-dom";

import MainPage from "./layouts/MainPage";
import MoviesPage from "./pages/MoviesPage";
import GenrePage from "./pages/GenrePage";
import MovieInfoPage from "./pages/MovieInfoPage";
import GenreDetailsPage from "./pages/GenreDetailsPage";


function App() {
  return (
  <Routes>
    <Route path={'/'} element={<MainPage/>}>
     <Route path={'movies'} element = {<MoviesPage/>}/>
     <Route path={'movies/:id'} element = {<MovieInfoPage/>}/>
     <Route path={'genre'} element = {<GenrePage/>}/>
     <Route path={'genre/:id'} element = {<GenreDetailsPage/>}/>
    </Route>

  </Routes>
  );
}

export default App;
