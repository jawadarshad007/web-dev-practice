import React ,{ useContext } from 'react'
import ChildC from './ChildC'
import { themeContext } from '../App'
import './ChildB.css'
const ChildB = () => {
    const {theme, setTheme} = useContext(themeContext)  
    function handleClick (){
        if (theme === 'light'){
          return  setTheme('dark')
        }
        else{
                setTheme('light')
        }
    }
  return (
    <div>
        <button onClick={handleClick}>Change theme</button>
        <div id="container" style={{backgroundColor:theme==='light'?"beige":'black',
        color: theme==='light' ? 'black' : 'white'
        }}>
        <h1>Some Data from ChildB</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam.
        </p>
        </div>
      <ChildC/>
    </div>
  )
}

export default ChildB
