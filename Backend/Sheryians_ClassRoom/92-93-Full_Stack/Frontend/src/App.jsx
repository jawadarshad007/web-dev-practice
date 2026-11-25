import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {
  const [notes, setNotes] = useState([
    {
    title: "Test Title 1",
    description: "Test description 1"
  },
    {
    title: "Test Title 2",
    description: "Test description 2"
  },
    {
    title: "Test Title 3",
    description: "Test description 1"
  },
    {
    title: "Test Title 4",
    description: "Test description 1"
  },
    
    
])
 

  //app ko jis type ki api call krne ha,axios. ka agge likh do 

  //According to CORS policy app aik website ma hote hoe ksis dosari website pr request nai kr skahte for security purpose ,like  yahn app frontend ma rahte hoe backend pr request nai kr skate 
  // to bypass this, we have to configure our server ka wo cross origin requests accept kr la , is ka lia apne server pr hm cors() ka use krte hn
  axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
    // console.log(res.data)
    console.log(res.data.notes)
    setNotes(res.data.notes)
  })


  return (
    <>
    <div className="notes">
    {
      notes.map((note)=>{
        return  <div className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
      })
    }

     
    </div>
    </>
  )
}

export default App