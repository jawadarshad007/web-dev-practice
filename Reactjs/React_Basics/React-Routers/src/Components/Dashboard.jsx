import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      {/* <Outlet /> acts like a placeholder in the parent route component where the child route will be displayed.
You can think of it as:
“Show my child route’s component here inside the parent.” */}
      <Outlet/>
        
    </div>
  )
}

export default Dashboard
