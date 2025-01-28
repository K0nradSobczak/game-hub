import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/homepage'
import Layout from './pages/layout'
import GameDetails from './pages/game-details';


const router = createBrowserRouter([
  { path: '/',
    element: <Layout/>,
    children:  [
      { index: true, element: <HomePage/> },
      { path: 'game/:id', element: <GameDetails/> }
    ]
  }
])
export default router;