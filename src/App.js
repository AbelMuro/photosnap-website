import React from 'react';
import NavBar from './Components/NavBar';
import FooterBar from './Components/FooterBar';
import Home from './Pages/Home';
import Stories from './Pages/Stories';
import Features from './Pages/Features';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';


function App () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/stories' element={<Stories/>}/>
                <Route path='/features' element={<Features/>}/>
            </Routes>
            <FooterBar/>
        </BrowserRouter>
    )
}


export default App;