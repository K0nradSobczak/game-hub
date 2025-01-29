import { HStack, Image } from "@chakra-ui/react"
import Logo from '../../assets/GameHub Resources/Logo/logo.webp'
import ColorSwitch from "./color-switch"
import Search from "./search"
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Link to='/'>
      <Image _hover={{transform: 'scale(1.05)', transition: '.15s ease-in'}} src={Logo} boxSize='60px'/>
      </Link>
      <Search />
      <ColorSwitch/>
    </HStack>
  )
}

export default NavBar