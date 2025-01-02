import { Platform } from "@/hooks/games";
import { Text, HStack } from "@chakra-ui/react";


interface Props {
  platform: Platform[];
}
function PlatformIconList({ platform }: Props) {

  return (
    <HStack>
      {platform.map(p => (
          <Text color="GrayText" fontSize="sm" key={p.id}>{p.name.split(" ")[0]}</Text>
      ))}
    </HStack>



  )
}

export default PlatformIconList;
