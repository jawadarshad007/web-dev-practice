import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import Reports from './components/Reports'
import MockTest from './components/MockTest'
import NotFound from './components/NotFound'

// what is route in React?
// React ma Route ka matlab hai ke aapki website ke different URLs par different pages ya components show karna.
// For example, aapki website par ye pages hain:
// / → Home Page
// /about → About Page
// /contact → Contact Page
// /login → Login Page
// Jab user /about URL par jaye, to About page show hona chahiye. Is kaam ke liye React ma commonly React Router library use hoti hai.
// npm i react-router-dom

// Types of Routers
  // -BrowserRouter(used 99.9%)
          // -it uses History API
          // Provide clean URLs
          // Used by Modern apps 
          // Need server Configurations
          // Good for SEO
  // Hash Router
          // contains # like /courses/#/about
          // Used in older Browsers
          // No SEO

const router = createBrowserRouter([
  // these below are routes , here we create different router
  {
    path : "/", // Home page
     // is "./" path pa below components render hn gyn
    element: <>   
    <Navbar></Navbar>
    <Home/>
    </>   
  },
  {
    path:"/about",  
    element:<>
    <Navbar></Navbar>
    <About/>
    </>
  },
  {
    path: "/dashboard",
    element: <>
    <Navbar></Navbar>
    <Dashboard/>
    </>,
    // nested routing 
    // FOR that <Outlet> should be used in parent route elements to render their child route elements
    children:[
      {
        path : "courses",
        element : <Courses/>
      },
      {
        path: "mock-tests",
        element: <MockTest/>
      },
      {
        path: "reports",
        element: <Reports/>

      }
    ]
  },
  {
    // Route Paramerter (here we create dynamic routes)
    path: "/student/:id",
    element:
    <>
    <Navbar></Navbar>
    <ParamComp></ParamComp>
    </>
  },
  {
    // agr uper jitna path define hn , in ma sa koi bhi na hoa to ya path chale ga 
    path :"*",
    element : <NotFound/>

  }
])

// useNavigation hook , is sa hm aik path sa dosare path pr transfer ho skahte hn without re-loading the page
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* yahn hm React ko routes ka context provde kr rahn hn  */}
    <RouterProvider router={router}/>
    {/* <Navbar/> */}
    </>
  )
}

export default App
