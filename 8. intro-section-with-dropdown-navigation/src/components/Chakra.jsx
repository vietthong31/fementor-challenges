import {
  ChakraProvider,
  createMultiStyleConfigHelpers,
  defineStyleConfig,
  extendTheme,
} from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(['container', 'item', 'icon']);

const List = defineMultiStyleConfig({
  baseStyle: {
    container: {
      alignItems: 'center',
      listStyleType: 'none',
      color: 'gray.medium',
      columnGap: 8,
      ml: 16,
      align: 'center',
      flexGrow: 1,
    },
  },
  sizes: {
    base: {
      container: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        p: '1rem',
        bgColor: 'white',
        width: '50vw',
        height: '100vh',
        flexDir: 'column',
        alignItems: 'flex-start',
        rowGap: '1rem',
      },
      item: {
        width: '100%',
      },
    },
    lg: {
      container: { flexDir: 'row' },
    },
  },
  variants: {
    nested: {
      container: {
        w: 'max',
        bg: 'white',
        p: 4,
        pb: { base: 0, lg: 2 },
        ml: 0,
        borderRadius: { lg: 10 },
        boxShadow: { lg: '5px 5px 30px gray' },
        position: { lg: 'absolute' },
        top: 'calc(100% + 0.6rem)',
        right: 0,
      },
    },
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'medium',
    bg: 'transparent',
  },
  variants: {
    outline: {
      color: 'gray.medium',
      borderWidth: 2.25,
      borderRadius: 15,
      _hover: {
        bg: 'transparent',
        color: 'black.almost',
        borderColor: 'black.almost',
      },
    },
  },
});

const Link = defineStyleConfig({
  baseStyle: {
    _hover: {
      textDecor: 'none',
      color: 'black.almost',
    },
  },
});

const theme = extendTheme({
  colors: {
    gray: { medium: 'hsl(0, 0%, 41%)' },
    black: { almost: 'hsl(0, 0%, 8%)' },
    white: { almost: 'hsl(0, 0%, 98%)' },
  },
  fonts: {
    body: 'Epilogue, sans-serif',
    heading: 'Epilogue, sans-serif',
  },
  components: {
    Button,
    List,
    Link,
  },
});

export default function Chakra({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
