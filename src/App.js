import './App.css'

import React from "react";

import {PageLayout} from "./layouts";
import {Home} from "./pages/home";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "./pages/movieDetails/MovieDetails";


function App() {
    return (
        <PageLayout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/moviedetails/:id' element={<MovieDetails/>}/>
            </Routes>

        </PageLayout>
    );
}

export default App;
