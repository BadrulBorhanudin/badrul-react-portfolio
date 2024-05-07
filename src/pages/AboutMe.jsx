import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Divider,
  SimpleGrid,
} from '@chakra-ui/react';
import profilePic from '../assets/images/profile-pic.png';

function AboutMe() {
  return (
    <Box
      as='main'
      minHeight='calc(100vh - 250px)'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bg='#262736'
      py={8}
    >
      <VStack
        spacing={6}
        maxW='1000px'
        w='100%'
        px={8}
        py={8}
        bg='#262736'
        border='1px solid'
        borderColor='teal.500'
        borderRadius='lg'
        boxShadow='2xl'
        textAlign='center'
        mx={{ base: 4, md: 8 }} // Margin for gap on smaller screens
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 6, md: 12 }}
          alignItems='center'
        >
          <Image
            borderRadius='full'
            boxSize='300px'
            src={profilePic}
            alt='Badrul Borhanudin'
            boxShadow='lg'
            justifySelf='center'
          />
          <VStack spacing={2} alignItems={{ base: 'center', md: 'flex-start' }}>
            <Text fontSize='2xl' fontWeight='bold' color='teal.300'>
              Hello, I'm Badrul Borhanudin.
            </Text>
            <Text fontSize='md'>
              Coding Bootcamp Student from University of Adelaide
            </Text>
          </VStack>
        </SimpleGrid>
        <Divider borderColor='gray.500' />
        <Text fontSize='md' textAlign='left'>
          I have always had a strong passion for IT. I started working as an IT
          Technician and worked my way up to become a System Engineer, mainly
          working in a team within an IT Support Department. Being in IT
          Support, I had to be available 24/7 on-call, which sometimes could be
          inconvenient in terms of work-life balance.
        </Text>
        <Text fontSize='md' textAlign='left'>
          A little fun fact about myself: I did not go to college or university
          to study IT before I had my first IT job. Instead, I did a Bachelor's
          Degree in Mechanical Engineering and realized that the nature of the
          job was not to my liking, and I preferred working in IT much more.
        </Text>
        <Text fontSize='md' textAlign='left'>
          I am looking forward to having a career change in development.
          Hopefully, through this bootcamp journey, I will achieve my ultimate
          goal!
        </Text>
      </VStack>
    </Box>
  );
}

export default AboutMe;
