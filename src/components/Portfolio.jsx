import Slider from 'react-slick';
import {
  Box,
  Heading,
  VStack,
  Image,
  Link,
  Text,
  useColorModeValue,
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
    deployLink: 'https://badrulborhanudin.github.io/password-generator/',
    repoLink: 'https://github.com/badrulborhanudin/password-generator',
  },
  {
    title: 'Coding Quiz App',
    image: codingQuizApp,
    deployLink: 'https://badrulborhanudin.github.io/coding-quiz-app/',
    repoLink: 'https://github.com/BadrulBorhanudin/coding-quiz-app',
  },
  {
    title: 'Work Day Scheduler',
    image: workDayScheduler,
    deployLink: 'https://badrulborhanudin.github.io/work-day-scheduler/',
    repoLink: 'https://github.com/badrulborhanudin/work-day-scheduler',
  },
  {
    title: 'Weather Dashboard',
    image: weatherDashboard,
    deployLink: 'https://badrulborhanudin.github.io/weather-dashboard/',
    repoLink: 'https://github.com/badrulborhanudin/weather-dashboard',
  },
  {
    title: 'Route Optimisation Tool',
    image: routeOptimisationTool,
    deployLink: 'https://BadrulBorhanudin.github.io/AsTheCrowDrives',
    repoLink: 'https://github.com/BadrulBorhanudin/AsTheCrowDrives',
  },
  {
    title: 'Goal Getter',
    image: goalGetter,
    deployLink: 'https://project2-goalgetter-31273201db63.herokuapp.com/',
    repoLink: 'https://github.com/BadrulBorhanudin/GoalGetter',
  },
  {
    title: 'CarPoolHub',
    image: carPoolHub,
    deployLink: 'https://carpoolhub.onrender.com/',
    repoLink: 'https://github.com/BadrulBorhanudin/carpoolhub',
  },
];

function Portfolio() {
  const headingColor = useColorModeValue('brand.700', 'brand.50');
  const cardBg = useColorModeValue('brand.50', 'brand.900');
  const dotColor = useColorModeValue('gray.900', 'white');
  const dotActiveColor = useColorModeValue('gray.900', 'white');

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
            <Box
              key={index}
              borderWidth='1px'
              borderRadius='lg'
              overflow='hidden'
              bg={cardBg}
              p={4}
              mx={2}
              mt={3}
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
                <Text fontWeight='bold'>
                  <Link
                    href={project.deployLink}
                    isExternal
                    color='limeGreen.500'
                  >
                    Live Demo
                  </Link>
                </Text>
                <Text fontWeight='bold'>
                  <Link
                    href={project.repoLink}
                    isExternal
                    color='limeGreen.500'
                  >
                    Source Code
                  </Link>
                </Text>
              </VStack>
            </Box>
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
