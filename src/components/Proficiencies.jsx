import {
  Box,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

function Proficiencies() {
  const icons = [
    { icon: faHtml5, label: 'HTML' },
    { icon: faCss3Alt, label: 'CSS' },
    { icon: faJsSquare, label: 'JavaScript' },
    { icon: faReact, label: 'React' },
    { icon: faNodeJs, label: 'Node.js' },
    { icon: SiExpress, label: 'Express' },
    { icon: SiMongodb, label: 'MongoDB' },
    { icon: SiMysql, label: 'MySQL' },
    { icon: faGitAlt, label: 'Git' },
    { icon: faGithub, label: 'GitHub' },
  ];

  const headingColor = useColorModeValue('brand.700', 'brand.50');
  const textColor = useColorModeValue('brand.900', 'brand.50');

  return (
    <VStack spacing={4} mt={8} mb={0} align='center' w='full'>
      <Box w={['90%', '70%', '80%']} p={4} textAlign='center'>
        <Heading as='h3' size='md' color={headingColor} mb={6}>
          Proficiencies
        </Heading>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 5 }}
          spacing={10}
          textAlign='center'
        >
          {icons.map(({ icon: Icon, label }) => (
            <VStack key={label}>
              {typeof Icon === 'function' ? (
                <Icon size='2em' />
              ) : (
                <FontAwesomeIcon icon={Icon} size='2x' />
              )}
              <Text color={textColor}>{label}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default Proficiencies;
