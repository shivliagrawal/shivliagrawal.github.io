import Home from "./home/Home";
import About from "./about/About";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/resume'} element={<Resume />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />

        </Routes>
    )
}