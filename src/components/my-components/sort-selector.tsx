import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger,  VStack, Text } from "@chakra-ui/react"

interface Props {
  onSelectSort: (sortOrder: string) => void;
  sorting: string | null;
}

function SortSelector({onSelectSort, sorting}: Props) {
  const sortOptions = [
    { value: "-added", label: "Date added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Average rating" },
    { value: "-released", label: "Release date" },
  ]
  const sortOption = sortOptions.find((option) => option.value === sorting)
  return (
    <VStack>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button>{ sortOption?.label || <Text>Sort Selector</Text>}</Button>
        </MenuTrigger>
        <MenuContent >
          {sortOptions.map((option) => (
            <MenuItem onClick={() => onSelectSort(option.value)} key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </VStack>
  )
}

export default SortSelector