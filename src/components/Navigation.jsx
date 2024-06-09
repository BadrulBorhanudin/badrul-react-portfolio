import { UnorderedList, ListItem, Link, useColorMode } from '@chakra-ui/react';

const Navigation = ({ onClose }) => {
  const { colorMode } = useColorMode();

  const linkColor = {
    light: 'brand.700', // Color for light mode
    dark: 'brand.50', // Color for dark mode
  };

  const hoverColor = {
    light: 'brand.400', // Hover color for light mode
    dark: 'brand.400', // Hover color for dark mode
  };

  const activeLinkColor = {
    light: 'brand.500', // Active link color for light mode
    dark: 'brand.300', // Active link color for dark mode
  };

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.location.hash = `#${targetId}`;
    onClose();

    setTimeout(() => {
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Delay to ensure modal is closed before scrolling
  };

  return (
    <UnorderedList
      listStyleType='none'
      display='flex'
      flexDirection={{ base: 'column', md: 'row' }}
      gap={{ base: 4, md: 8 }}
      m={3}
      p={0}
    >
      <ListItem>
        <Link
          href='#about-me'
          color={linkColor[colorMode]}
          _hover={{ color: hoverColor[colorMode] }}
          _activeLink={{ color: activeLinkColor[colorMode] }}
          fontWeight='bold'
          fontSize='lg'
          onClick={handleClick}
        >
          About Me
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href='#portfolio'
          color={linkColor[colorMode]}
          _hover={{ color: hoverColor[colorMode] }}
          _activeLink={{ color: activeLinkColor[colorMode] }}
          fontWeight='bold'
          fontSize='lg'
          onClick={handleClick}
        >
          Projects
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href='#contact'
          color={linkColor[colorMode]}
          _hover={{ color: hoverColor[colorMode] }}
          _activeLink={{ color: activeLinkColor[colorMode] }}
          fontWeight='bold'
          fontSize='lg'
          onClick={handleClick}
        >
          Contact
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default Navigation;
