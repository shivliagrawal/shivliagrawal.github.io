import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box
            id="portfolio"
            ref={innerRef}
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                boxSizing: 'border-box',
            }}
        >
            <Grid
                container
                spacing={3}
                style={{
                    maxWidth: '800px',
                    width: '100%',
                }}
            >
                {/* Map each project into its respective grid position */}
                {info.portfolio.map((project, index) => (
                    <Grid
                        item
                        xs={6} // Ensure 2 items per row (12 grid system: 6+6 = 12)
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
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
