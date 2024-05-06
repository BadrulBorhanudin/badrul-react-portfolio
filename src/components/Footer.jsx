import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Box as='footer' py={4} textAlign='center' bg='#191a24' color='#e6e9f0'>
      <HStack
        as='ul'
        justifyContent='center'
        listStyleType='none'
        spacing={8}
        m={0}
        p={0}
      >
        <Box as='li'>
          <Link
            href='https://github.com/badrulborhanudin'
            target='_blank'
            rel='noopener noreferrer'
            _hover={{ color: 'teal.300' }}
          >
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </Link>
        </Box>
        <Box as='li'>
          <Link
            href='https://www.linkedin.com/in/badrul-b-2968402b2'
            target='_blank'
            rel='noopener noreferrer'
            _hover={{ color: 'teal.300' }}
          >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </Link>
        </Box>
      </HStack>
      <Text mt={4} fontSize='sm'>
        &copy; {new Date().getFullYear()} Badrul Borhanudin. All rights
        reserved.
      </Text>
    </Box>
  );
}

export default Footer;
