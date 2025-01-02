import usePlatforms from '@/hooks/platforms'
import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'


function PlatformSelector() {
  const {errors,data}= usePlatforms();
  return (
    <>
    <MenuRoot>
      <MenuTrigger asChild >
        <Button  variant={'outline'} colorPalette={"grey"}>Platforms</Button>
        </MenuTrigger>
      <MenuContent>
        {data.map(p => (<MenuItem value={p.slug}>{p.name}</MenuItem>))}
      </MenuContent>
    </MenuRoot>
    </>
  )
}

export default PlatformSelector