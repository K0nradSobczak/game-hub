import { Outlet } from 'react-router-dom'
import NavBar from '../components/my-components/nav-bar'
import { Box } from '@chakra-ui/react'

function Layout() {

  return (
    <>
    <NavBar/>
    <Box padding={10}><Outlet/></Box>
    </>
  )
}

export default Layout