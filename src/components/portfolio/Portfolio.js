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
                width: '800px',
                height: '600px',
                padding: '1rem', // Add padding to prevent content cutoff
                boxSizing: 'border-box', // Ensure padding is included in dimensions
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                {/* Top Row */}
                <Grid
                    container
                    justifyContent="center"
                    style={{
                        width: '100%',
                        display: 'flex',
                        marginBottom: '1rem',
                    }}
                >
                    {info.portfolio.slice(0, 2).map((project, index) => (
                        <Grid
                            item
                            key={index}
                            style={{
                                width: '45%',
                                height: '40%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '1rem',
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

                {/* Bottom Row */}
                <Grid
                    container
                    justifyContent="center"
                    style={{
                        width: '100%',
                        display: 'flex',
                        marginTop: '1rem',
                    }}
                >
                    {info.portfolio.slice(2, 4).map((project, index) => (
                        <Grid
                            item
                            key={index}
                            style={{
                                width: '45%',
                                height: '40%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '1rem',
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
            </Grid>
        </Box>
    );
}
