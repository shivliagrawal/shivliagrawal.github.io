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
                paddingTop: '15rem', // Add padding to avoid top cut-off
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
                        xs={6} // Two items per row (6+6 = 12)
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <PortfolioBlock
                            image={project.image}
                            source={project.source}
                            title={project.title}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
