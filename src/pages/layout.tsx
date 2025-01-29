import { Outlet } from 'react-router-dom'
import NavBar from '../components/my-components/nav-bar'

function Layout() {

  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default Layout