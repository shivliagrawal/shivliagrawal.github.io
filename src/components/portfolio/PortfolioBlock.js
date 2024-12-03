import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title } = props;

   return (
      <Box 
         display="flex" 
         flexDirection="column" 
         justifyContent="center" 
         alignItems="center" 
         width="100%" 
         maxWidth="350px" // Limit the width of each block
      >
         {/* Image Container */}
         <Box
            component="img"
            src={image}
            alt="mockup"
            sx={{
               width: '100%', // Ensure images are consistent in size
               height: '200px', // Set a fixed height
               objectFit: 'cover', // Maintain aspect ratio, fill available space
               borderRadius: '10px', // Optional for rounded corners
            }}
         />
         {/* Title */}
         <h1 style={{ fontSize: '1.5rem', textAlign: 'center', marginTop: '1rem' }}>{title}</h1>
         <Box 
            className="portfolio" 
            display="flex" 
            flexDirection="column" 
            gap="0.5rem"
            alignItems="center" 
            fontSize="1.5rem" 
            py="2rem"
         >
            <Box p={1} border="2px solid black" borderRadius="25px">
               <IconLink link={source} title="Source Code" icon="fa fa-code" />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
