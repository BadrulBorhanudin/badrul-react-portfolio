import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import profilePic from '../assets/images/profile-pic.png';

function AboutMe() {
  return (
    <Box
      as='main'
      minHeight='calc(100vh - 220px)'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <VStack spacing={4} maxW='500px' w='100%' px={4} textAlign='center'>
        <Heading as='h2' size='xl'>
          About Me
        </Heading>
        <Image
          borderRadius='full'
          boxSize='200px'
          src={profilePic}
          alt='Badrul Borhanudin'
        />
        <Text fontSize='lg'>
          Hello, I'm Badrul, a coding bootcamp student from University of
          Adelaide.
        </Text>
      </VStack>
    </Box>
  );
}

export default AboutMe;
