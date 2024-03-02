import { VStack, Box, Heading, Text, Flex, Button, useRadioGroup } from '@chakra-ui/react';
import StarIcon from './StarIcon';
import RadioButton from './RadioButton';

const RateForm = ({ onChange, onSubmit }) => {
  const options = ['1', '2', '3', '4', '5'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'rating',
    onChange: (value) => onChange(value),
  });

  const handleSubmit = () => onSubmit(true);

  const group = getRootProps();
  return (
    <>
      <Box px="1rem" py="0.8rem" bgColor="blue.dark" borderRadius="100%">
        <StarIcon />
      </Box>
      <Heading as="h1" color="white" mt={8} mb={4} lineHeight={1}>
        How did we do?
      </Heading>
      <Text color="grey.light" m={0}>
        Please let us know how we did with your support request. All feedback is appreciated to help
        us improve our offering
      </Text>
      <Flex w="100%" justify="space-between" {...group} my={8}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioButton key={value} {...radio}>
              {value}
            </RadioButton>
          );
        })}
      </Flex>
      <Button
        onClick={handleSubmit}
        variant="solid"
        bg="orange"
        color="white"
        lineHeight={1}
        w="100%"
        borderRadius={20}
        _hover={{ bg: 'white', color: 'orange' }}
      >
        SUBMIT
      </Button>
    </>
  );
};

export default RateForm;
