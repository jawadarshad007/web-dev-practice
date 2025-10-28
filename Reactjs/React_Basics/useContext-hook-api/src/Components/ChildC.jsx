import React ,{ useContext } from 'react'
import { UserContext  } from '../App'
const ChildC = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <p>Data from Child C .......User Name: {user.name} his age: {user.age}</p>
    </div>  
  )
}

export default ChildC
