import { Platform } from '@/hooks/games';
import usePlatforms from '@/hooks/platforms'
import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger,Text } from '@chakra-ui/react'

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  platform: Platform | null;
}

function PlatformSelector({onSelectPlatform, platform}: Props) {
  const {data}= usePlatforms();

  return (
    <>
    <MenuRoot>
      <MenuTrigger asChild >
        <Button  variant={'outline'}  colorPalette={"grey"}>{platform?.name || <Text>Platform</Text>}</Button>
        </MenuTrigger>
      <MenuContent>
        {data.map(p => (<MenuItem onClick={() => onSelectPlatform(p)} key={p.slug} value={p.slug}>{p.name}</MenuItem>))}
      </MenuContent>
    </MenuRoot>
    </>
  )
}

export default PlatformSelector