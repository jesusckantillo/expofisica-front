import { useState } from 'react';
import { ChakraProvider, Box, Button, Image } from "@chakra-ui/react";
import FerrosoImage from "../../../assets/image/Ferrous.png";
import NoFerrosoImage from "../../../assets/image/NonFerrous.png"

function MetalDetector() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (index) => {
    if (selectedImage === index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(index);
    }
  };

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
            />
            <Button onClick={() => handleSelectImage(index)}>
              {selectedImage === index ? 'Deselect' : 'Select'}
            </Button>
          </div>
        ))}
      </Box>
    </ChakraProvider>
  );
}

export default MetalDetector;

