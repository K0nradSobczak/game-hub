import { Outlet } from 'react-router-dom'
import NavBar from '../components/my-components/nav-bar'
import { Box } from '@chakra-ui/react'

function Layout() {

  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default Layout