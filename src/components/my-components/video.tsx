import useTrailers from "@/hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  id: number | string ;
}

function Video({id}: Props) {
  const {data, isLoading, error} = useTrailers(id);
  if(isLoading) return <Spinner/>
  if (error) throw error;
  const video1 = data?.results[0];

  return video1 ? (
    <>
    <video
      src={video1.data['480']}
      poster={video1.preview}
      controls/>
    </>
  ): null
}

export default Video