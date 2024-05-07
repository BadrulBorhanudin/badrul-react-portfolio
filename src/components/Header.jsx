import {
  Box,
  Heading,
  HStack,
  Link,
  ListItem,
  UnorderedList,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const MenuLinks = () => (
    <UnorderedList
      listStyleType='none'
      display='flex'
      flexDirection={{ base: 'column', md: 'row' }}
      gap={{ base: 4, md: 8 }}
      m={3}
      p={0}
    >
      <ListItem>
        <Link
          as={NavLink}
          to='/'
          end
          _hover={{ color: 'teal.300' }}
          _activeLink={{ color: 'teal.300' }}
          fontWeight='bold'
          fontSize='lg'
        >
          About Me
        </Link>
      </ListItem>
      <ListItem>
        <Link
          as={NavLink}
          to='/portfolio'
          _hover={{ color: 'teal.300' }}
          _activeLink={{ color: 'teal.300' }}
          fontWeight='bold'
          fontSize='lg'
        >
          Projects
        </Link>
      </ListItem>
      <ListItem>
        <Link
          as={NavLink}
          to='/contact'
          _hover={{ color: 'teal.300' }}
          _activeLink={{ color: 'teal.300' }}
          fontWeight='bold'
          fontSize='lg'
        >
          Contact
        </Link>
      </ListItem>
      <ListItem>
        <Link
          as={NavLink}
          to='/resume'
          _hover={{ color: 'teal.300' }}
          _activeLink={{ color: 'teal.300' }}
          fontWeight='bold'
          fontSize='lg'
        >
          Resume
        </Link>
      </ListItem>
    </UnorderedList>
  );

  return (
    <Box as='header' py={4} bg='#191a24' color='#e6e9f0'>
      <Flex align='center' mx={{ base: 4, md: 8 }} mb={1} position='relative'>
        <Heading
          as='h1'
          size='lg'
          flexShrink={0}
          display={{ base: 'block', md: 'none' }}
        >
          Badrul Borhanudin
        </Heading>
        <Spacer display={{ base: 'block', md: 'none' }} />
        <Heading
          as='h1'
          size='xl'
          textAlign='center'
          flex='1'
          display={{ base: 'none', md: 'block' }}
        >
          Badrul Borhanudin
        </Heading>
        <Box
          position='absolute'
          right={{ base: 0, md: 0 }}
          display={{ base: 'block', md: 'none' }}
        >
          <IconButton
            aria-label='Open Menu'
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant='outline'
            color='#e6e9f0'
            border='1px'
            _hover={{ bg: '#282a36' }}
          />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='#191a24' color='#e6e9f0' maxW='400px'>
          <ModalCloseButton />
          <ModalBody py={8}>
            <MenuLinks />
          </ModalBody>
        </ModalContent>
      </Modal>
      <HStack
        as='nav'
        justifyContent='center'
        display={{ base: 'none', md: 'flex' }}
      >
        <MenuLinks />
      </HStack>
    </Box>
  );
}

export default Header;
