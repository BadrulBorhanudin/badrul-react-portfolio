import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/javascript.png';
import reactIcon from '../assets/icons/react.png';
import nodeIcon from '../assets/icons/node.png';
import expressIcon from '../assets/icons/express.png';
import mongodbIcon from '../assets/icons/mongodb.png';
import mysqlIcon from '../assets/icons/mysql.png';
import gitIcon from '../assets/icons/git.png';
import githubIcon from '../assets/icons/github.png';

function Proficiencies() {
  const icons = [
    htmlIcon,
    cssIcon,
    jsIcon,
    reactIcon,
    nodeIcon,
    expressIcon,
    mongodbIcon,
    mysqlIcon,
    gitIcon,
    githubIcon,
  ];

  const headingColor = useColorModeValue('brand.700', 'brand.50');

  return (
    <VStack spacing={4} mt={8} mb={0} align='center' w='full'>
      <Box w={['90%', '70%', '80%']} p={0} textAlign='center'>
        <Heading as='h3' size='md' color={headingColor} mb={6}>
          Proficiencies
        </Heading>
        <SimpleGrid
          columns={{ base: 5, md: 10 }}
          spacing={5}
          textAlign='center'
        >
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              boxSize={{ base: '2.5em',  md: '3.5em' }}
              objectFit='contain'
            />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default Proficiencies;
