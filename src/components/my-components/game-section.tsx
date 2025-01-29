import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
function GameSection({term,children}: Props) {
  return (
      <Box marginTop={2}>
        <Heading marginBottom={1} as={'dt'} size='md' fontWeight={'bold'} color={'gray'}>{term}</Heading>
        {children}
      </Box>
  )
}

export default GameSection