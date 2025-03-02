import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box
            id="portfolio"
            ref={innerRef}
            sx={{
                width: '100vw',
                height: '100%',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '2rem', // Adjusted padding
                paddingBottom: '10rem',
                boxSizing: 'border-box',
                
            }}
        >
            <Grid
                container
                spacing={5}
                sx={{
                    maxWidth: '1400px',
                    width: '100%',
                    height: '2000px',
                }}
            >
                {info.portfolio.map((project, index) => (
                    <Grid
                        item
                        xs={12} sm={12} // Now projects take full width on mobile and large screens
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                                                marginBottom: '1rem'
                        }}
                    >
                        <PortfolioBlock
                            images={project.images}
                            source={project.source}
                            title={project.title}
                            description={project.description} // Pass description from data
                            tools={project.tools}

                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
