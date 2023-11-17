import { useState } from 'react';
import socket from 'socket';
import { ChakraProvider, Box, Button, Image } from "@chakra-ui/react";
import FerrosoImage from "assets/img/Ferrous.png";
import NoFerrosoImage from "assets/img/NonFerrous.png"
import { useEffect } from 'react';


function MetalDetector(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFerrous, setIsFerrous] = useState(false);

const handleSelectImage = (isFerrous) => {
  setSelectedImage(isFerrous ? 0 : 1);
};

useEffect(() => {
  socket.on('MD', (data) => {
    const parsedData = JSON.parse(data)
    const {isFerrous} = parsedData.MD
    const isFerrousNumber = Number(isFerrous);
    if (isFerrousNumber===1) {
      setIsFerrous(true);
    } else {
      setIsFerrous(false);
    }
    handleSelectImage(isFerrousNumber);
  });
}, []);



  const images = [
    { src: FerrosoImage, alt: "Ferroso" },
    { src: NoFerrosoImage, alt: "NoFerroso" },
  ];

  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="row">
        {images.map((image, index) => (
  <div style={{display: '', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
    <Image
      
      src={image.src}
      alt={image.alt}
      filter={selectedImage === index ? "" : "brightness(0.5)"}
    />
    
    
  </div>
))}

      </Box>
    </ChakraProvider>
  );
}

export default MetalDetector;