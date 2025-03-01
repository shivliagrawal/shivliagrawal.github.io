import React, { useState } from 'react';
import { Box, Button, Typography } from "@mui/material";

function PortfolioBlock({ images, title, tools, description }) {
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
         // maxWidth="1800px" // Increased size
      >
         {/* Image Slider */}
         <Box position="relative" width="100%" height="660px" maxWidth="960px">
            <Box
               component="img"
               src={images[currentIndex]}
               alt={`Slide ${currentIndex + 1}`}
               sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'flex', // Ensures images scale properly
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  border: "20px solid #fee181"
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
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        borderRadius: '50%',
                        minWidth: '40px',
                        height: '40px',
                        fontSize: '1.5rem',
                        '&:hover': { background: 'rgba(0,0,0,0.9)' },
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
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        borderRadius: '50%',
                        minWidth: '40px',
                        height: '40px',
                        fontSize: '1.5rem',
                        '&:hover': { background: 'rgba(0,0,0,0.9)' },
                     }}
                  >
                     ›
                  </Button>
               </>
            )}
         </Box>

         {/* Title */}
         <Typography 
            variant="h5" 
            sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center', font: 'Serif'}}
         >
            {title}
         </Typography>

         {/* Tools */}
         <Typography 
            variant="h6" 
            sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center'}}
         >
            {tools}
         </Typography>

         {/* Description */}
         <Typography 
            variant="body1" 
            sx={{ mt: 1, textAlign: 'center', maxWidth: '700px', color: 'gray' }}
         >
            {description}
         </Typography>
      </Box>
   );
}

export default PortfolioBlock;
