import React from 'react';
import NavBar from './Components/NavBar';
import FooterBar from './Components/FooterBar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';


function App () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <FooterBar/>
        </BrowserRouter>
    )
}


export default App;