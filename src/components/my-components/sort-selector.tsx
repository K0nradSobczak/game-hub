import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger, Text, VStack } from "@chakra-ui/react"


function SortSelector() {
  return (
    <VStack>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>Sort Selector</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="Relevence">Relevence</MenuItem>
          <MenuItem value="Date added">Date added</MenuItem>
          <MenuItem value="Popularity">Popularity</MenuItem>
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="Average rating">Average rating</MenuItem>
        </MenuContent>
      </MenuRoot>
    </VStack>
  )
}

export default SortSelector