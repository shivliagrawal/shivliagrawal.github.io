import React from 'react';
import { Box } from '@mui/material';
import Style from './Resume.module.scss';
import resumeImage from './resumee.png'; // Ensure resume.png exists in the same directory

export default function Resume() {
    return (
        <Box className={Style.resumeContainer}>
            <h1 className={Style.heading}>My Resume</h1>
            <img
                src={resumeImage}
                alt="Resume"
                className={Style.resumeImage}
            />
        </Box>
    );
}
