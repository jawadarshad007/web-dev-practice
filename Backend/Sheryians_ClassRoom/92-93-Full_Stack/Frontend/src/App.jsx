import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {
  const [notes, setNotes] = useState([])
  
  console.log("Hello Integration")

  function fetchNotes(){
      //app ko jis type ki api call krne ha,axios. ka agge likh do 

  //According to CORS policy app aik website ma hote hoe ksis dosari website pr request nai kr skahte for security purpose ,like  yahn app frontend ma rahte hoe backend pr request nai kr skate 
  // to bypass this, we have to configure our server ka wo cross origin requests accept kr la , is ka lia apne server pr hm cors() ka use krte hn
  axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
    // console.log(res.data)
    console.log(res.data.notes)
    setNotes(res.data.notes)
  })
  }

  useEffect(()=>{
    fetchNotes()
  },[])
 


  function handleSubmit(e){
    e.preventDefault()
    const {title, description} = e.target.elements;
    console.log(title.value, description.value)

    axios.post("http://localhost:3000/api/notes",{
      title: title.value,
      description: description.value  
    })
    .then((res)=>{
      console.log(res.data);
      fetchNotes()
    })  
  }

  


  function handleDeleteNote(noteId){
    console.log(noteId)
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res =>{
      console.log(res.data)
      fetchNotes()
    })
  }





  function handleEditNote(noteId, note){
    const newDescription = prompt("Enter new Description", note.description)

    // agar user ne cancel kiya ya empty chora to kuch na karo
    if (!newDescription || newDescription == note.description) return


    axios.patch("http://localhost:3000/api/notes/"+noteId , {
      description : newDescription
    })
    .then((res)=>{
      console.log(res.data)
      fetchNotes()
    })
  }



  return (
    <>
    <form className='note-create-form' onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='Enter title' />
      <input name='description' type="text" placeholder='Enter description' />
      <button>Create Note</button>
    </form>

    <div className="notes">
    {
      notes.map((note)=>{
        // console.log(note)
        return  <div className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={()=> {handleDeleteNote(note._id)}}>Delete</button>
        <br />
        <button onClick={()=>{handleEditNote(note._id, note)}}>Edit description</button>
      </div>
      })
    }

     
    </div>
    </>
  )
}

export default App
