import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Layout from './components/Layout';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

function App() {
  return (
    // <Box
    //   minH='100vh'
    //   display='flex'
    //   flexDirection='column'
    //   justifyContent='space-between'
    // >
    <Layout>
      <Header />
      <Box as='main' flex='1'>
        <Home />
      </Box>
      <Footer />
    </Layout>
    // </Box>
  );
}

export default App;
