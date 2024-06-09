import Slider from 'react-slick';
import {
  Box,
  Heading,
  VStack,
  Image,
  Link,
  Button,
  useColorModeValue,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Portal,
} from '@chakra-ui/react';
import { Global } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import passwordGenerator from '../assets/images/weekly-challenges-1.png';
import codingQuizApp from '../assets/images/weekly-challenges-2.png';
import workDayScheduler from '../assets/images/weekly-challenges-3.png';
import weatherDashboard from '../assets/images/weekly-challenges-4.png';
import routeOptimisationTool from '../assets/images/group-project-1.png';
import goalGetter from '../assets/images/group-project-2.png';
import carPoolHub from '../assets/images/group-project-3.png';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrows';

const projects = [
  {
    title: 'Password Generator',
    image: passwordGenerator,
    deployLink: 'https://BadrulBorhanudin.github.io/password-generator/',
    repoLink: 'https://github.com/BadrulBorhanudin/password-generator',
    description: 'A tool to generate secure passwords.',
  },
  {
    title: 'Coding Quiz App',
    image: codingQuizApp,
    deployLink: 'https://BadrulBorhanudin.github.io/coding-quiz-app/',
    repoLink: 'https://github.com/BadrulBorhanudin/coding-quiz-app',
    description: 'A quiz app to test your coding knowledge.',
  },
  {
    title: 'Work Day Scheduler',
    image: workDayScheduler,
    deployLink: 'https://BadrulBorhanudin.github.io/work-day-scheduler/',
    repoLink: 'https://github.com/BadrulBorhanudin/work-day-scheduler',
    description: 'A simple scheduler for your work day.',
  },
  {
    title: 'Weather Dashboard',
    image: weatherDashboard,
    deployLink: 'https://BadrulBorhanudin.github.io/weather-dashboard/',
    repoLink: 'https://github.com/BadrulBorhanudin/weather-dashboard',
    description: 'A dashboard to check the weather forecast.',
  },
  {
    title: 'Route Optimisation Tool',
    image: routeOptimisationTool,
    deployLink: 'https://BadrulBorhanudin.github.io/AsTheCrowDrives',
    repoLink: 'https://github.com/BadrulBorhanudin/AsTheCrowDrives',
    description: 'A tool to optimize travel routes.',
  },
  {
    title: 'Goal Getter',
    image: goalGetter,
    deployLink: 'https://project2-goalgetter-31273201db63.herokuapp.com/',
    repoLink: 'https://github.com/BadrulBorhanudin/GoalGetter',
    description: 'An app to help you achieve your goals.',
  },
  {
    title: 'CarPoolHub',
    image: carPoolHub,
    deployLink: 'https://carpoolhub.onrender.com/',
    repoLink: 'https://github.com/BadrulBorhanudin/carpoolhub',
    description: 'A platform to find carpooling partners.',
  },
];

function Portfolio() {
  const headingColor = useColorModeValue('brand.700', 'brand.50');
  const dotColor = useColorModeValue('gray.900', 'white');
  const dotActiveColor = useColorModeValue('gray.900', 'white');
  const liveButtonTextColor = useColorModeValue('gray.800', 'gray.800');
  const sourceButtonTextColor = useColorModeValue(
    'limeGreen.600',
    'limeGreen.500'
  );
  const sourceButtonBorderColor = useColorModeValue(
    'limeGreen.600',
    'limeGreen.500'
  );
  const projectBorderColor = useColorModeValue('brand.200', 'brand.600');
  const popoverBg = useColorModeValue('brand.50', 'brand.800');
  const popoverTextColor = useColorModeValue('brand.800', 'brand.50');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <VStack spacing={8} mt={8} mb={10}>
      <Heading as='h2' size='lg' color={headingColor}>
        Projects
      </Heading>
      <Box width='full'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Popover key={index} placement='bottom' isLazy>
              <PopoverTrigger>
                <Box
                  borderWidth='1px'
                  borderRadius='lg'
                  borderColor={projectBorderColor}
                  overflow='hidden'
                  p={4}
                  mx={2}
                  mt={3}
                  cursor='pointer'
                  position='relative'
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    objectFit='cover'
                    height='200px'
                    width='100%'
                  />
                  <VStack p={4} align='center'>
                    <Heading
                      as='h3'
                      size='md'
                      color={useColorModeValue('gray.800', 'brand.50')}
                      textAlign='center'
                    >
                      {project.title}
                    </Heading>
                    <HStack spacing={4} mt={2}>
                      <Button
                        as={Link}
                        href={project.deployLink}
                        isExternal
                        bg={useColorModeValue('limeGreen.600', 'limeGreen.500')}
                        color={liveButtonTextColor}
                        _hover={{
                          bg: useColorModeValue(
                            'limeGreen.500',
                            'limeGreen.700'
                          ),
                        }}
                        variant='solid'
                        size='sm'
                      >
                        Live Demo
                      </Button>
                      <Button
                        as={Link}
                        href={project.repoLink}
                        isExternal
                        borderColor={sourceButtonBorderColor}
                        color={sourceButtonTextColor}
                        _hover={{
                          bg: 'limeGreen.600',
                          color: 'brand.800',
                        }}
                        variant='outline'
                        size='sm'
                      >
                        Source Code
                      </Button>
                    </HStack>
                  </VStack>
                </Box>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  bg={popoverBg}
                  borderRadius='md'
                  color={popoverTextColor}
                >
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>{project.description}</PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          ))}
        </Slider>
      </Box>
      <Global
        styles={`
          .slick-dots li button:before {
            color: ${dotColor} !important;
          }
          .slick-dots li.slick-active button:before {
            color: ${dotActiveColor} !important;
          }
        `}
      />
    </VStack>
  );
}

export default Portfolio;
