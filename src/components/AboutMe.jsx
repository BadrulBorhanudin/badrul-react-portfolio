import {
  Box,
  Image,
  Text,
  VStack,
  Divider,
  SimpleGrid,
  Link,
  HStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { DownloadIcon } from '@chakra-ui/icons';
import profilePic from '../assets/images/profile-pic.png';
import { motion } from 'framer-motion';
import Proficiencies from './Proficiencies';

function AboutMe() {
  const nameColor = useColorModeValue('limeGreen.600', 'limeGreen.500');
  const buttonBg = useColorModeValue('limeGreen.600', 'limeGreen.500');
  const buttonHoverBg = useColorModeValue('limeGreen.500', 'limeGreen.700');
  const buttonTextColor = useColorModeValue('gray.800', 'gray.800');
  const hoverColor = useColorModeValue('limeGreen.600', 'limeGreen.500');
  const borderColor = useColorModeValue(
    'rgba(255, 255, 255, 0.5)',
    'rgba(0, 0, 0, 0.5)'
  );
  const boxShadow = useColorModeValue(
    '0 0 20px rgba(0, 0, 0, 0.1)',
    '0 0 20px rgba(255, 255, 255, 0.1)'
  );

  const text = "Hello, I'm Badrul.";
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Box
      as='main'
      minHeight='calc(100vh - 250px)'
      display='flex'
      mx='auto'
      mb='10'
      justifyContent='center'
      alignItems='center'
      py={{ base: 0, md: 8 }}
      borderRadius='3xl'
      width='100%'
    >
      <VStack spacing={6} w='100%' px={{ base: 4, md: 8 }} textAlign='center'>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 6, md: 12 }}
          alignItems='center'
        >
          <Image
            src={profilePic}
            alt='Badrul Borhanudin'
            boxSize={{ base: '150px', sm: '200px', md: '300px' }}
            borderRadius='full'
            objectFit='cover'
            border='5px solid'
            borderColor={borderColor}
            boxShadow={boxShadow}
            justifySelf='center'
          />

          <VStack spacing={2} alignItems={{ base: 'center', md: 'flex-start' }}>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              style={{ display: 'inline-flex', justifyContent: 'center' }}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={childVariants}
                  style={{ display: 'inline-block' }}
                >
                  <Text
                    fontSize='2xl'
                    fontWeight='bold'
                    color={nameColor}
                    display='inline-block'
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </Text>
                </motion.span>
              ))}
            </motion.div>
            <Text fontSize='md'>
              Coding Bootcamp Graduate from University of Adelaide
            </Text>
            <HStack spacing={4} mt={2}>
              <Link
                href='https://github.com/BadrulBorhanudin'
                isExternal
                _hover={{ color: hoverColor }}
              >
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/BadrulBorhanudin'
                isExternal
                _hover={{ color: hoverColor }}
              >
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </Link>
              <Button
                leftIcon={<DownloadIcon />}
                bg={buttonBg}
                color={buttonTextColor}
                _hover={{ bg: buttonHoverBg }}
                as={Link}
                href='/resume.pdf'
                download
              >
                Download CV
              </Button>
            </HStack>
          </VStack>
        </SimpleGrid>
        <Divider borderColor='gray.500' />
        <Box w='100%'>
          <Text fontSize='md' textAlign='justify'>
            Full stack web developer with a strong foundation in IT support, now
            working professionally in full stack development. Brings a
            user-focused perspective to building intuitive, responsive, and
            maintainable applications with an emphasis on usability and
            performance. Certified in Full Stack Web Development from the
            University of Adelaide Coding Boot Camp. Skilled in both front-end
            and back-end development, with a practical approach to solving
            real-world problems and delivering stable, production-ready
            solutions. Focused on collaboration and following projects through
            from concept to deployment.
          </Text>
        </Box>
        <Proficiencies />
      </VStack>
    </Box>
  );
}

export default AboutMe;
