// Chakra Imports
import {
	Avatar,
	Box,
	Flex,
	Icon,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Grid,
	GridItem

} from '@chakra-ui/react';
// Custom Components
import { ItemContent } from 'components/menu/ItemContent';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import { SidebarResponsive } from 'components/SideBar/Sidebar';
import PropTypes from 'prop-types';
import React from 'react';
// Assets
import navImage from 'assets/img/layout/Navbar.png';
import { MdNotificationsNone, MdInfoOutline } from 'react-icons/md';
import { FaEthereum } from 'react-icons/fa';
import routes from 'routes.js';
import { ThemeEditor } from './ThemeEditor';
// Imgs
import adrianimg from '../../assets/img/teampics/ADRIANGONGORA.jpg';
import anyeliimg from '../../assets/img/teampics/ANYELISAN.jpeg';
import chrisimg from '../../assets/img/teampics/CRHISACABA.jpg';
import elkinimg from '../../assets/img/teampics/ELKINPULGAR.jpg';
import haxelimg from '../../assets/img/teampics/HAXELLGOMEZ.jpg';
import isaimg from '../../assets/img/teampics/ISACHACON.jpg';
import bornaimg from '../../assets/img/teampics/JBORNCALLY.jpg';
import jesusimg from '../../assets/img/teampics/JESUSACANTILLO.jpg';
import barceloimg from '../../assets/img/teampics/JUANBARCE.jpg';
import bermejoimg from '../../assets/img/teampics/JUANBERMEJO.jpg';
import ortegaimg from '../../assets/img/teampics/JOSEORTEGA.jpg';
import lucasimg from '../../assets/img/teampics/LUCASROMERO.jpg';
import sebasimg from '../../assets/img/teampics/SEBASESCOBAR.jpeg';
import yzhu from '../../assets/img/teampics/YZHU.jpg';
import povea from '../../assets/img/teampics/JUANPOVEA.jpg';




import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const slides = [
	{ image: adrianimg, text: "Adrian Gongora" , major: "Ingeniería Electronica" },
	{ image: anyeliimg, text: "Anyeli Sanjuan", major: "Ingeniería Civil" },
	{ image: chrisimg, text: "Chis Cabana", major: "Ingeniería Electronica" },
	{ image: elkinimg, text: "Elkin Pulgar" , major: "Ingeniería Electronica"},
	{ image: haxelimg, text: "Haxell Gomez" , major: "Ingeniería Electronica"},
	{ image: isaimg, text: "Isabela Chacón", major: "Ingeniería Electrica" },
	{ image: bornaimg, text: "Juan Bornacelly", major: "Ingeniería Electrica" },
	{ image: jesusimg, text: "Jesús Cantillo" , major : "Ingeniería de Sistemas"},
	{ image: barceloimg, text: "fan de momo", major: "Ingeniería Electronica" },
	{ image: bermejoimg, text: "Juan Bermejo", major: "Ingeniería Electronica" },
	{ image: ortegaimg, text: "José Ortega" , major: "Ingeniería Electronica"},
	{ image: lucasimg, text: "Lucas Romero", major: "Ingeniería Electronica" },
	{ image: sebasimg, text: "Sebastian Escobar", major: "Ingeniería Electronica" },
	{ image: yzhu, text: "Yovany Zhu" , major : "Ingeniería de Sistemas"},
	{ image: povea, text: "Juan Povea", major : "Ingeniería de Sistemas" },

  ];





export default function HeaderLinks(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { secondary } = props;
	// Chakra Color Mode
	const navbarIcon = useColorModeValue('gray.400', 'white');
	let menuBg = useColorModeValue('white', 'navy.800');
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.700', 'brand.400');
	const ethColor = useColorModeValue('gray.700', 'white');
	const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
	const ethBg = useColorModeValue('secondaryGray.300', 'navy.900');
	const ethBox = useColorModeValue('white', 'navy.800');
	const shadow = useColorModeValue(
		'14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
		'14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
	);
	const borderButton = useColorModeValue('secondaryGray.500', 'whiteAlpha.200');
	return (
		<>

<Modal style={{borderRadius:"20px"}} isOpen={isOpen} onClose={onClose} maxWidth="100%">
  <ModalOverlay />
  <ModalContent maxWidth="80%" bg="gray.100" color="gray.900" boxShadow="md">
    <ModalHeader textAlign="center" fontSize="2xl" bg="#4429fc" color="white" boxShadow="sm">Nuestro equipo</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6} p={4}>
        {slides.map((slide, index) => (
          <GridItem key={index} textAlign="center">
            <Box borderRadius="5px" overflow="hidden">
              <Image 
                src={slide.image} 
                alt={slide.text} 
                w="100%" 
                h="80%" 
                objectPosition="center" 
              />
            </Box>
            <Text fontSize="md" fontWeight="bold" mt={2}>{slide.text}</Text>
            <Text fontSize="sm" color="#4429fc">{slide.major}</Text>
          </GridItem>
        ))}
      </Grid>
    </ModalBody>
  </ModalContent>
</Modal>



		<Flex
			w={{ sm: '100%', md: 'auto' }}
			alignItems="center"
			flexDirection="row"
			bg={menuBg}
			flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
			p="10px"
			borderRadius="30px"
			boxShadow={shadow}>
			<SidebarResponsive routes={routes} />
			<Menu>
				<MenuButton p="0px">
					<Avatar
						_hover={{ cursor: 'pointer' }}
						color="white"
						name="Uni Norte"
						bg="rgba(209, 21, 24, 0.8);"
						size="sm"
						w="40px"
						h="40px"
					/>
				</MenuButton>
				<MenuList boxShadow={shadow} p="0px" mt="10px" borderRadius="20px" bg={menuBg} border="none">
					<Flex w="100%" mb="0px">
						<Text
							ps="20px"
							pt="16px"
							pb="10px"
							w="100%"
							borderBottom="1px solid"
							borderColor={borderColor}
							fontSize="sm"
							fontWeight="700"
							color={textColor}>
							👋&nbsp; ¡Hola! Estudiante Uninorte
						</Text>
					</Flex>
					<Flex flexDirection="column" p="10px">
						<MenuItem onClick={onOpen} _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} borderRadius="8px" px="14px">
  							<Text fontSize="sm">¿Quienes somos?</Text>
						</MenuItem>
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} borderRadius="8px" px="14px">
							<Text fontSize="sm">Configuración</Text>
						</MenuItem>
						<MenuItem
							_hover={{ bg: 'none' }}
							_focus={{ bg: 'none' }}
							color="red.400"
							borderRadius="8px"
							px="14px">
							<Text fontSize="sm">Salir</Text>
						</MenuItem>
					</Flex>
				</MenuList>
			</Menu>
		</Flex>
		</>
	);
}

HeaderLinks.propTypes = {
	variant: PropTypes.string,
	fixed: PropTypes.bool,
	secondary: PropTypes.bool,
	onOpen: PropTypes.func
};
