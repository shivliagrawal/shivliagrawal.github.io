import Home from "./home/Home";
import About from "./about/About";
import Resume from "./resume/Resume"
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>
        <Resume innerRef={refs.refResume}/>
        <Portfolio innerRef={refs.refPortfolio}/>
    </Box>)
}