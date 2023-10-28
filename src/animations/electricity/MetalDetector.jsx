import { useState } from 'react';
import socket from 'socket';
import { ChakraProvider, Box, Button, Image } from "@chakra-ui/react";
import FerrosoImage from "assets/img/Ferrous.png";
import NoFerrosoImage from "assets/img/NonFerrous.png"
import { useEffect } from 'react';


function MetalDetector(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFerrous, setIsFerrous] = useState(false);

  const handleSelectImage = (index) => {
    if (selectedImage === index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(index);
    }
  };

  useEffect(() => {
    socket.on('expData', (data) => {
      const parsedData = JSON.parse(data)
      const {isFerrous} = parsedData.MD
      if (isFerrous===1) {
        setIsFerrous(true);
      } else {
        setIsFerrous(false);
      }
      setSelectedImage(isFerrous ? 0 : 1);
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
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              filter={selectedImage === index ? "" : "brightness(0.5)"}
              onMouseEnter={() => handleSelectImage(index)}
              onMouseLeave={() => handleSelectImage(index)}
            />
          </div>
        ))}
      </Box>
    </ChakraProvider>
  );
}

export default MetalDetector;

