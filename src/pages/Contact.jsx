import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email))
      validationErrors.email = 'Invalid email address';
    if (!message) validationErrors.message = 'Message is required';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <VStack spacing={8} mt={8} mb={16} align='center'>
      <Heading as='h2' size='lg' color='#e6e9f0'>
        Contact Me
      </Heading>
      <Box
        as='form'
        onSubmit={handleSubmit}
        w={['90%', '70%', '50%']}
        bg='#262736'
        p={8}
        borderRadius='md'
      >
        <VStack spacing={4} align='stretch'>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='name' color='#e6e9f0'>
              Name
            </FormLabel>
            <Input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  name: !name ? 'Name is required' : '',
                }))
              }
              borderColor='gray.600'
              _focus={{
                borderColor: 'teal.300',
                boxShadow: '0 0 0 1px teal.300',
              }}
              color='#e6e9f0'
            />
            {errors.name && (
              <Text color='red.400' fontSize='sm'>
                {errors.name}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='email' color='#e6e9f0'>
              Email
            </FormLabel>
            <Input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  email: !/\S+@\S+\.\S+/.test(email)
                    ? 'Invalid email address'
                    : '',
                }))
              }
              borderColor='gray.600'
              _focus={{
                borderColor: 'teal.300',
                boxShadow: '0 0 0 1px teal.300',
              }}
              color='#e6e9f0'
            />
            {errors.email && (
              <Text color='red.400' fontSize='sm'>
                {errors.email}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.message}>
            <FormLabel htmlFor='message' color='#e6e9f0'>
              Message
            </FormLabel>
            <Textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  message: !message ? 'Message is required' : '',
                }))
              }
              borderColor='gray.600'
              _focus={{
                borderColor: 'teal.300',
                boxShadow: '0 0 0 1px teal.300',
              }}
              color='#e6e9f0'
            />
            {errors.message && (
              <Text color='red.400' fontSize='sm'>
                {errors.message}
              </Text>
            )}
          </FormControl>

          <Button type='submit' colorScheme='teal' _hover={{ bg: 'teal.400' }}>
            Submit
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
}

export default Contact;