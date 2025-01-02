import { Badge } from "@chakra-ui/react"

interface Props {
  critic: number;
}

function Metacritic({critic}: Props) {
  let color = critic > 85 ? 'green'
  : critic > 60 ? 'yellow'
  : 'red';
  return (
    <Badge color={color} fontSize="md" padding={3} borderRadius="50%">{critic}</Badge>
  )
}

export default Metacritic