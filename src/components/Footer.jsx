import { Box, HStack, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const textColor = useColorModeValue('brand.900', 'brand.50');
  const hoverColor = useColorModeValue('limeGreen.600', 'limeGreen.500');

  return (
    <Box as='footer' py={4} textAlign='center' color={textColor}>
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
            href='https://github.com/BadrulBorhanudin'
            target='_blank'
            rel='noopener noreferrer'
            _hover={{ color: hoverColor }}
          >
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </Link>
        </Box>
        <Box as='li'>
          <Link
            href='https://www.linkedin.com/in/BadrulBorhanudin'
            target='_blank'
            rel='noopener noreferrer'
            _hover={{ color: hoverColor }}
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
