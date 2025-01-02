import { HStack, Text } from "@chakra-ui/react"
import { useColorMode } from "../ui/color-mode"
import { Switch } from "@/components/ui/switch"


function ColorSwitch() {
  const {toggleColorMode,colorMode}= useColorMode();
  return (
    <HStack>
      <Switch colorScheme="-moz-initial" checked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text>{colorMode} mode</Text>
    </HStack>
  )
}

export default ColorSwitch