import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import thank from '../assets/illustration-thank-you.svg';

const Thank = ({ rating }) => {
  return (
    <VStack>
      <Image src={thank} />
      <Text
        bg="blue.dark"
        color="orange"
        py={2}
        px={6}
        my={4}
        borderRadius={100}
        textDecoration="none"
      >
        You selected {rating} out of 5
      </Text>
      <Heading as="h1" color="white">
        Thank you!
      </Heading>
      <Text color="grey.medium" textAlign="center">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </Text>
    </VStack>
  );
};

export default Thank;
