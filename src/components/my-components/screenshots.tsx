import useScreenshot from '@/hooks/use-screenshot';
import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
interface Props {
  id: number | string;
}
function Screenshots({id}: Props) {
  const {data, isLoading, error} = useScreenshot(id);
  if (isLoading) return <Spinner />
  if (error) throw error
  return (
    <SimpleGrid marginTop={2} columns={{sm: 1, lg: 2} } gap={'10'}>
    {data?.results.map(image => (
      <Image key={image.id} src={image.image}/>
    ))}
    </SimpleGrid>
  )
}

export default Screenshots