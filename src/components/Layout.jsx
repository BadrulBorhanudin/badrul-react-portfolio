// src/components/Layout.js
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box
      width={{ base: '100%', md: '1000px' }}
      mx='auto'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      px={{ base: 2, md: 0}}
    >
      {children}
    </Box>
  );
};

export default Layout;
