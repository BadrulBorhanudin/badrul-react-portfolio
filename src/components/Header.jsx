import {
  Box,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Flex,
  useColorMode,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Navigation from './Navigation';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('brand.700', 'brand.50');
  const buttonColor = useColorModeValue('brand.700', 'brand.50');
  const buttonHoverBg = useColorModeValue('gray.100', 'brand.800');
  const modalBg = useColorModeValue(
    'linear-gradient(to right, #f7f7f7, #e1e1e1)',
    'linear-gradient(to right, #0e0e0e, #2e2e2e)'
  );

  return (
    <Box as='header' py={4} bg='transparent' color={color}>
      <Flex
        align='center'
        mx={{ base: 4, md: 8 }}
        justifyContent='space-between'
      >
        <a href='/'>
          <Heading
            as='h1'
            size={{ base: 'md', md: 'lg' }}
            flexShrink={0}
            fontStyle='italic'
          >
            {'<BB />'}
          </Heading>
        </a>
        <HStack
          as='nav'
          display={{ base: 'none', md: 'flex' }}
          alignItems='center'
        >
          <Navigation onClose={onClose} />
          <Button
            onClick={toggleColorMode}
            variant='outline'
            color={buttonColor}
            border='1px'
            ml={4}
          >
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </HStack>
        <IconButton
          aria-label='Open Menu'
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant='outline'
          color={buttonColor}
          border='1px'
          _hover={{ bg: buttonHoverBg }}
          display={{ base: 'flex', md: 'none' }}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        tent{' '}
        <ModalContent bg={modalBg} color={color} maxW='400px'>
          <ModalCloseButton />
          <ModalBody py={8}>
            <Navigation onClose={onClose} />
            <Button
              onClick={toggleColorMode}
              variant='outline'
              color={buttonColor}
              border='1px'
              mt={4}
            >
              {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Header;
