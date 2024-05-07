import {
  Box,
  Heading,
  Link,
  VStack,
  Text,
  Button,
  SimpleGrid,
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

function Resume() {
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

  return (
    <VStack spacing={2} mt={8} mb={16} align='center'>
      <Heading as='h2' size='lg' color='#e6e9f0'>
        Resume
      </Heading>
      <Box
        w={['90%', '70%', '50%']}
        bg='#262736'
        p={8}
        borderRadius='md'
        textAlign='center'
      >
        <Text mb={4} color='#e6e9f0'>
          Click the button below to download my resume.
        </Text>
        <Link href='/resume.pdf' download>
          <Button colorScheme='teal' _hover={{ bg: 'teal.400' }} mb={8}>
            Download Resume
          </Button>
        </Link>
        <Heading as='h3' size='md' color='#e6e9f0' mb={6}>
          Proficiencies
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6} textAlign='center'>
          {icons.map(({ icon: Icon, label }) => (
            <VStack key={label}>
              {typeof Icon === 'function' ? (
                <Icon size='3em' />
              ) : (
                <FontAwesomeIcon icon={Icon} size='3x' />
              )}
              <Text color='#e6e9f0'>{label}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}

export default Resume;