import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar.jsx';
import audiophile from './assets/client-audiophile.svg';
import databiz from './assets/client-databiz.svg';
import maker from './assets/client-maker.svg';
import meet from './assets/client-meet.svg';
import hero from './assets/image-hero-desktop.png';
import heroMobile from './assets/image-hero-mobile.png';

function App() {
  return (
    <Box minH="100vh" bg="white.almost">
      <Navbar />
      <Flex
        as="main"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="center"
        columnGap={24}
        w="100%"
        mt={5}
      >
        <Flex
          flexBasis="40%"
          flexDirection="column"
          rowGap={10}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Heading
            as="h1"
            size={{ base: '2xl', md: '4xl' }}
            mt={20}
            display="flex"
            flexDir={{ md: 'column', base: 'row' }}
          >
            <Text mr="0.6ex">Make</Text>
            <Text>remote work</Text>
          </Heading>
          <Text
            as="p"
            width={{ base: '90%', md: '68%' }}
            color="gray.medium"
            textAlign={{ base: 'center', md: 'start' }}
          >
            Get your team in sync, no matter your location. Streamline processes, create team
            rituals, and watch productivity soar.
          </Text>
          <Button
            bg="black.almost"
            color="white.almost"
            border="1px solid"
            borderColor="black.almost"
            borderRadius={14}
            px={6}
            py={6}
            _hover={{ bg: 'white.almost', color: 'black.almost' }}
          >
            Learn more
          </Button>
          <Flex alignItems="flex-start" columnGap={{ base: 6, md: 10 }} mt="auto">
            <Image src={databiz} w={{ base: '84px', md: '114px' }} />
            <Image src={audiophile} w={{ base: '53px', md: '73px' }} />
            <Image src={meet} w={{ base: '70px', md: '90px' }} />
            <Image src={maker} w={{ base: '63px', md: '83px' }} />
          </Flex>
        </Flex>
        <Box order={{ base: -1, md: 0 }} alignSelf={{ base: 'center' }}>
          <picture>
            <source srcSet={`${heroMobile} 2.2x`} media="(max-width: 480px)" />
            <Image src={hero} alt="" width="400px" />
          </picture>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
