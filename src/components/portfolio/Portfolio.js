import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box id="portfolio" ref={innerRef}>
            <Grid
                container
                justifyContent="space-between"
                alignItems="space-between"
                style={{ width: '800px', height: '600px', display: 'flex' }} // Ensure Grid spans the desired dimensions
            >
                {info.portfolio.map((project, index) => (
                    <Grid
                        item
                        xs={12}
                        md={6}
                        key={index}
                        style={{
                            width: '45%', // Adjust box size
                            height: '45%', // Adjust box size
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '1rem', // Add spacing between items
                        }}
                    >
                        <PortfolioBlock
                            image={project.image}
                            live={project.live}
                            source={project.source}
                            title={project.title}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
