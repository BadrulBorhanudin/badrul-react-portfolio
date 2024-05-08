import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import Project from '../components/Project';
import passwordGenerator from '../assets/images/weekly-challenges-1.png';
import codingQuizApp from '../assets/images/weekly-challenges-2.png';
import workDayScheduler from '../assets/images/weekly-challenges-3.png';
import weatherDashboard from '../assets/images/weekly-challenges-4.png';
import routeOptimisationTool from '../assets/images/group-project-1.png';
import goalGetter from '../assets/images/group-project-2.png';


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
    repoLink: 'https://github.com/BadrulBorhanudin/work-day-scheduler',
  },
  {
    title: 'Weather Dashboard',
    image: weatherDashboard,
    deployLink: 'https://badrulborhanudin.github.io/weather-dashboard/',
    repoLink: 'https://github.com/BadrulBorhanudin/weather-dashboard',
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
];

function Portfolio() {
  return (
    <VStack spacing={8} mt={8} mb={16}>
      <Heading as='h2' size='lg' color='#e6e9f0'>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployLink={project.deployLink}
            repoLink={project.repoLink}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default Portfolio;
