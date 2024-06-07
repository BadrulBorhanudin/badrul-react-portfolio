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
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

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
      alert(
        'Sorry, this contact form is under construction. Use the contact details below to reach me instead. Thank you.'
      );
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const headingColor = useColorModeValue('brand.800', 'brand.50');
  const formLabelColor = useColorModeValue('brand.700', 'brand.50');
  const inputBorderColor = useColorModeValue('brand.300', 'brand.600');
  const inputFocusBorderColor = useColorModeValue(
    'brand.900',
    'brand.900'
  );
  const inputTextColor = useColorModeValue('brand.900', 'brand.50');
  const errorTextColor = useColorModeValue('red.500', 'red.400');
  const contactTextColor = useColorModeValue('brand.900', 'brand.50');
  const iconColor = useColorModeValue('limeGreen.500', 'limeGreen.500');
  const buttonHoverBg = useColorModeValue('brand.300', 'brand.400');
  const buttonTextColor = useColorModeValue('gray.800', 'gray.800');

  return (
    <VStack spacing={8} mt={10} mb={10} align='center'>
      <Heading as='h2' size='lg' color={headingColor}>
        Let's Connect
      </Heading>
      <Box
        as='form'
        onSubmit={handleSubmit}
        w={['90%', '70%', '50%']}
        p={0}
        borderRadius='md'
      >
        <VStack spacing={4} align='stretch'>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='name' color={formLabelColor}>
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
              borderColor={inputBorderColor}
              _focus={{
                borderColor: inputFocusBorderColor,
                boxShadow: `0 0 0 1px ${inputFocusBorderColor}`,
              }}
              color={inputTextColor}
            />
            {errors.name && (
              <Text color={errorTextColor} fontSize='sm'>
                {errors.name}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='email' color={formLabelColor}>
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
              borderColor={inputBorderColor}
              _focus={{
                borderColor: inputFocusBorderColor,
                boxShadow: `0 0 0 1px ${inputFocusBorderColor}`,
              }}
              color={inputTextColor}
            />
            {errors.email && (
              <Text color={errorTextColor} fontSize='sm'>
                {errors.email}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.message}>
            <FormLabel htmlFor='message' color={formLabelColor}>
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
              borderColor={inputBorderColor}
              _focus={{
                borderColor: inputFocusBorderColor,
                boxShadow: `0 0 0 1px ${inputFocusBorderColor}`,
              }}
              color={inputTextColor}
            />
            {errors.message && (
              <Text color={errorTextColor} fontSize='sm'>
                {errors.message}
              </Text>
            )}
          </FormControl>

          <Button
            type='submit'
            bg='limeGreen.500'
            color={buttonTextColor}
            _hover={{ bg: buttonHoverBg }}
          >
            Submit
          </Button>

          <VStack spacing={4} mt={8} align='center'>
            <Box display='flex' alignItems='center'>
              <Icon as={PhoneIcon} color={iconColor} boxSize={7} />
              <Text ml={2} fontSize={['lg', 'xl']} color={contactTextColor}>
                +61 401 966 959
              </Text>
            </Box>
            <Box display='flex' alignItems='center'>
              <Icon as={EmailIcon} color={iconColor} boxSize={7} />
              <Text ml={2} fontSize={['lg', 'xl']} color={contactTextColor}>
                badrulborhanudin@gmail.com
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </VStack>
  );
}

export default Contact;
