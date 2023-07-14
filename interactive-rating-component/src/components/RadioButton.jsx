import { Box, useRadio } from '@chakra-ui/react';

const RadioButton = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        boxSizing="border-box"
        color="grey.light"
        lineHeight={1}
        px={['1.1rem', '1.3rem']}
        py={['0.8rem', '1rem']}
        bg="blue.dark"
        userSelect="none"
        borderRadius="100%"
        _hover={{ bg: 'grey.medium', color: 'white' }}
        _active={{ bg: 'orange', color: 'white' }}
        _checked={{ bg: 'orange', color: 'white' }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioButton;
