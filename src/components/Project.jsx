import { Box, Image, Link, Text, Heading, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Project({ title, image, deployLink, repoLink }) {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      bg='#262736'
      width='300px'
      boxShadow='md'
      _hover={{ transform: 'scale(1.05)', transition: '0.2s ease-in-out' }}
    >
      <Image
        src={image}
        alt={title}
        objectFit='cover'
        height='200px'
        width='100%'
      />

      <VStack p={4} align='start'>
        <Heading as='h3' size='md' color='#e6e9f0'>
          {title}
        </Heading>
        <Text>
          <Link href={deployLink} isExternal color='teal.300'>
            Live Demo
          </Link>
        </Text>
        <Text>
          <Link href={repoLink} isExternal color='teal.300'>
            Source Code
          </Link>
        </Text>
      </VStack>
    </Box>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;
