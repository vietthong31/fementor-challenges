import { useState } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import Thank from './components/Thank';
import RateForm from './components/RateForm';

function App() {
  const [rate, setRate] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);

  const content = isSubmitted ? (
    <Thank rating={rate} />
  ) : (
    <RateForm onChange={setRate} onSubmit={setSubmitted} />
  );

  return (
    <Flex minH="100vh" minW="100vw" align="center" justify="center" bgColor="blue.veryDark">
      <VStack
        w={['90%', '60%', null, '30%']}
        p="2rem"
        spacing="0"
        borderRadius="2rem"
        align={isSubmitted ? 'center' : 'flex-start'}
        bgColor="blue.dark2"
        justify="center"
      >
        {content}
      </VStack>
    </Flex>
  );
}

export default App;
