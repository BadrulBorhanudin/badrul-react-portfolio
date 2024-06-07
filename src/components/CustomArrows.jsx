import { IconButton, useColorModeValue } from '@chakra-ui/react';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  const bg = useColorModeValue('limeGreen.500', 'limeGreen.500');
  const color = useColorModeValue('brand.900', 'brand.900');

  return (
    <IconButton
      aria-label='Previous'
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        left: '10px',
        zIndex: 1,
        top: '50%',
        transform: 'translateY(-50%)',
        position: 'absolute',
      }}
      bg={bg}
      color={color}
      _hover={{ bg: 'limeGreen.500' }}
      _active={{ bg: 'limeGreen.500' }}
      size='md'
      borderRadius='lg'
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  const bg = useColorModeValue('limeGreen.500', 'limeGreen.500');
  const color = useColorModeValue('brand.50', 'brand.50');

  return (
    <IconButton
      aria-label='Next'
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        right: '10px',
        zIndex: 1,
        top: '50%',
        transform: 'translateY(-50%)',
        position: 'absolute',
      }}
      bg={bg}
      color={color}
      _hover={{ bg: 'limeGreen.500' }}
      _active={{ bg: 'limeGreen.500' }}
      size='md'
      borderRadius='lg'
    />
  );
};

export { CustomPrevArrow, CustomNextArrow };
