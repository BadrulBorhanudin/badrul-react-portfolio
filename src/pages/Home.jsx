import { Box } from '@chakra-ui/react';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Layout from '../components/Layout';

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
  </Layout>
);

export default Home;
