import React, { useState } from 'react';
// import IconLink from "./IconLink";
import { Box, Button } from "@mui/material";

function PortfolioBlock(props) {
   const { images, source, title } = props;
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   };

   const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
   };

   return (
      <Box 
         display="flex" 
         flexDirection="column" 
         justifyContent="center" 
         alignItems="center" 
         width="100%" 
         height="100%"
         maxWidth="1600px"
         maxHeight="1000px"
      >
         {/* Image Slider */}
         <Box position="relative" width="100%" height="100%">
            <Box
               component="img"
               src={images[currentIndex]} // Display current image
               alt={`Slide ${currentIndex + 1}`}
               sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'flex',
                  borderRadius: '10px',
               }}
            />
            {/* Navigation Buttons */}
            {images.length > 1 && (
               <>
                  <Button
                     onClick={prevImage}
                     sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '5%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        borderRadius: '50%',
                        minWidth: '30px',
                        height: '30px',
                     }}
                  >
                     ‹
                  </Button>
                  <Button
                     onClick={nextImage}
                     sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '5%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        borderRadius: '50%',
                        minWidth: '30px',
                        height: '30px',
                     }}
                  >
                     ›
                  </Button>
               </>
            )}
         </Box>

         {/* Title */}
         <h1 style={{ fontSize: '1.5rem', textAlign: 'center', marginTop: '1rem' }}>{title}</h1>
         <Box 
            className="portfolio" 
            display="center" 
            flexDirection="column" 
            gap="0.5rem"
            alignItems="center" 
            fontSize="1.5rem" 
            py="2rem"
         >
            {/* <Box p={1} border="2px solid black" borderRadius="25px" display="center" alignItems="center">
               <IconLink link={source} title="Source Code" icon="fa fa-code" />
            </Box> */}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
