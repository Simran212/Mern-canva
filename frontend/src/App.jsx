import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/Index'
import Layout from './pages/Layout'
import Home from './components/Home'
import Header from "./components/Header";
import Projects from "./components/Projects";
import Main from './pages/Main'
import Zoom from './components/Zoom'

const router = createBrowserRouter(
  [{
    path:"/",
    //element: <Layout/>,
    //element: <Projects/>,
    element:<Main/>,
    children: [
      {
        path: '/',
      //  element: <Zoom/>
      }]
  }]
)

function App() {
 return <RouterProvider router={router}/>
}

export default App
