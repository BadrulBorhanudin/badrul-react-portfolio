import {
  Box,
  Heading,
  HStack,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Box as='header' py={4} textAlign='center' bg='#191a24' color='#e6e9f0'>
      <Heading as='h1' size='xl' mb={4}>
        Badrul Borhanudin
      </Heading>
      <HStack as='nav' justifyContent='center'>
        <UnorderedList listStyleType='none' display='flex' gap={8} m={0} p={0}>
          <ListItem>
            <Link
              as={NavLink}
              to='/'
              end
              _hover={{ color: 'teal.300' }}
              _activeLink={{ color: 'teal.300' }}
              fontWeight='bold'
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
            >
              Resume
            </Link>
          </ListItem>
        </UnorderedList>
      </HStack>
    </Box>
  );
}

export default Header;
