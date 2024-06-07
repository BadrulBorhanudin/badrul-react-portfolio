import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Box as='main' flex='1'>
        <Home />
      </Box>
      <Footer />
    </Layout>
  );
}

export default App;
