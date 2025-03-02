import React, { useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import IconLink from "./IconLink";
import { Padding } from '@mui/icons-material';


function PortfolioBlock({ images,  source, title, tools, description }) {
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
         maxWidth="900px"
         mx="auto"
         py={4}
      >
         {/* Image Slider */}
         <Box position="relative" width="100%" height="550px">
            <Box
               component="img"
               src={images[currentIndex]}
               alt={`Slide ${currentIndex + 1}`}
               sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures a proper fit
                  borderRadius: '12px',
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                  border: "15px solid #fee181",
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
                        left: '2%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        borderRadius: '50%',
                        minWidth: '45px',
                        height: '45px',
                        fontSize: '1.5rem',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
                     }}
                  >
                     ‹
                  </Button>
                  <Button
                     onClick={nextImage}
                     sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '2%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        borderRadius: '50%',
                        minWidth: '45px',
                        height: '45px',
                        fontSize: '1.5rem',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
                     }}
                  >
                     ›
                  </Button>
               </>
            )}
         </Box>
         {/*Source*/}
         <Box p={1} border={'2px solid black'} borderRadius={'25px'} marginTop={'25px'}>
  {source && source.startsWith('http') ? (
    <>
      <IconLink link={source} title={'Source Code: '} icon={'fa fa-code'} />
      {source}
    </>
  ) : (
    "Source Code restricted due to course policies"
  )}
</Box>

         {/* Title */}
         <Typography 
            variant="h4" 
            sx={{ mt: 3, fontWeight: 'bold', textAlign: 'center', fontFamily: 'Serif' }}
         >
            {title}
         </Typography>

         {/* Description */}
         <Typography 
            variant="body1" 
            sx={{ mt: 2, textAlign: 'left', maxWidth: '700px', color: 'gray', px: 2 }}
         >
            {description}
         </Typography>

         {/* Tools Used */}
         <Typography 
            variant="subtitle1" 
            sx={{ mt: 1, textAlign: 'left', fontWeight: 'medium', color: 'gray' }}
         >
            {tools}
         </Typography>
      </Box>
   );
}

export default PortfolioBlock;
