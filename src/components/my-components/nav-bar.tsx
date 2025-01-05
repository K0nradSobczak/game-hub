import { HStack, Image } from "@chakra-ui/react"
import Logo from '../../assets/GameHub Resources/Logo/logo.webp'
import ColorSwitch from "./color-switch"
import Search from "./search"

interface Props{
  onSearch: (search: string) => void;
}

function NavBar({onSearch}: Props) {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={Logo} boxSize='60px'/>
      <Search onSearch={onSearch}/>
      <ColorSwitch/>
    </HStack>
  )
}

export default NavBar