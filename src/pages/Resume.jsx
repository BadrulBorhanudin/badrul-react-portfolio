import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';

function Resume() {
  return (
    <VStack spacing={8} mt={8} mb={16} align='center'>
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
        <Heading as='h3' size='md' color='#e6e9f0' mb={4}>
          Proficiencies
        </Heading>
        <List spacing={3} textAlign='center'>
          <ListItem color='#e6e9f0'>HTML</ListItem>
          <ListItem color='#e6e9f0'>CSS</ListItem>
          <ListItem color='#e6e9f0'>JavaScript</ListItem>
          <ListItem color='#e6e9f0'>React</ListItem>
          <ListItem color='#e6e9f0'>Node.js</ListItem>
          <ListItem color='#e6e9f0'>Express</ListItem>
          <ListItem color='#e6e9f0'>MongoDB</ListItem>
          <ListItem color='#e6e9f0'>SQL</ListItem>
          <ListItem color='#e6e9f0'>Git</ListItem>
          <ListItem color='#e6e9f0'>GitHub</ListItem>
        </List>
      </Box>
    </VStack>
  );
}

export default Resume;
