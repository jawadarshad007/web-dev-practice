
import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import Params from './Components/Params'
import Courses from './Components/Courses'
import MoctTest from './Components/MoctTest'
import Reports from './Components/Reports'
import PageNotFound from './Components/PageNotFound'
import Products from './Components/Products/Products'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
      <Navbar/>
      <Home/>

      </div>
    },
    {
      path:"/about",
      element: <div>
      <Navbar/>
      <About/>

      </div>
    },
    {
      path:"/dashboard",
      element: <div>
      <Navbar/>
      <Dashboard/>
      </div>   ,  
      children:[
        {
          path: "courses",
          element:<Courses/>
        },{
          path:"mock-tests",
          element:<MoctTest/>
        },{
          path:'reports',
          element:<Reports/>
        }
      ]
      },
      {
        path: "student/:id",
        element: <div>
        <Navbar/>
        <Params/>
        </div>
      },
      {
        path: '/products',
        element:<div>
          <Navbar/>
          <Products/>
        </div>
      },
      // path:"*": it runs when no route matches as you mentioned above.
      {
        path: "*",
        element: <PageNotFound/>
      }
  ]
)
function App() {

  return (
    <div>
      {/* <Navbar/> */}
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
