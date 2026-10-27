import React, { useState } from 'react'

const Navbar = (props) => {

    const [newTheme , setNewTheme] = useState('')
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        props.changeTheme(newTheme)// here we send data from children to parent 
        setNewTheme('')
    }}>
        <input type="text" value={newTheme} onChange={(e)=> setNewTheme(e.target.value)} placeholder='Enter theme' />
        <button>Submit</button>
    </form>
  )
}

export default Navbar