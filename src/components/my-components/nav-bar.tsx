import { HStack, Image } from "@chakra-ui/react"
import Logo from '../../assets/GameHub Resources/Logo/logo.webp'
import ColorSwitch from "./color-switch"
import Search from "./search"



function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={Logo} boxSize='60px'/>
      <Search />
      <ColorSwitch/>
    </HStack>
  )
}

export default NavBar