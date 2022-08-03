import React, {useState} from "react";
import {Route, Routes, useParams} from "react-router-dom";

import {PageLayout} from "./layouts";
import {Home} from "./pages/home";
import MovieDetails from "./pages/movieDetails/MovieDetails";


function App() {

    return (
        <PageLayout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/moviedetails/:id' element={<MovieDetails />}/>
            </Routes>

        </PageLayout>
    );
}

export default App;
