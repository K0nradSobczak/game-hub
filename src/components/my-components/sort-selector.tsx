import storeGames  from "@/store/game-query"
import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger,  VStack, Text } from "@chakra-ui/react"



function SortSelector() {
  const { sortedBy, gameQuery } = storeGames();
  const sortOptions = [
    { value: "-added", label: "Date added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Average rating" },
    { value: "-released", label: "Release date" },
  ]
  const sortOption = sortOptions.find((option) => option.value === gameQuery.sortOrder)
  return (
    <VStack>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>{ sortOption?.label || <Text>Sort Selector</Text>}</Button>
        </MenuTrigger>
        <MenuContent >
          {sortOptions.map((option) => (
            <MenuItem onClick={() => sortedBy(option.value)} key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </VStack>
  )
}

export default SortSelector