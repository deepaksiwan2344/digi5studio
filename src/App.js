
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import OurMovies from "./Components/OurMovies"
import MoviesDetails from "./Components/MoviesDetails"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path ="/" element={<Home />} />
      <Route path="movies/:type" element={<OurMovies />}></Route>
      <Route exact path ="movie/:id" element={<MoviesDetails />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
