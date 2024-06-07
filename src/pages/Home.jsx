import { Box } from '@chakra-ui/react';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
// import Resume from '../components/Resume';
import Layout from '../components/Layout';
// import Proficiencies from '../components/Proficiencies';

const Home = () => (
  <Layout>
    <Box id='about-me'>
      <AboutMe />
    </Box>
    <Box id='portfolio'>
      <Portfolio />
    </Box>
    <Box id='contact'>
      <Contact />
    </Box>
    {/* <Box>
      <Proficiencies />
    </Box> */}
  </Layout>
);

export default Home;
