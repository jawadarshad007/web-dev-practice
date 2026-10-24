import { useState } from 'react'
import Card from './components/Card'


function App() {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [role, setRole] = useState('')
  const [desc, setDesc] = useState('')

  const localData =  JSON.parse(localStorage.getItem("all-Users")) || []
  console.log(localData)

  const [allUsers, setAllUsers] = useState(localData)

  const handleSubmit = (e) => {
    e.preventDefault()

    const oldUsers = [...allUsers]  
    oldUsers.push({ name, imageUrl, role, desc })
    setAllUsers(oldUsers)

    // setAllUsers([...allUsers , { name, imageUrl, role, desc }])

    localStorage.setItem("all-Users" , JSON.stringify(oldUsers) )

    console.log(allUsers)

    setName('')
    setImageUrl('')
    setRole('')
    setDesc('')
  }

  const handleDelete = (idx)=>{
    const copyUsers = [...allUsers]
    const conf = confirm("Are U really want to delete this element?")
    if (conf){
      copyUsers.splice(idx , 1);
    }
    else{
      alert("Element not deleted")
    }

    
    setAllUsers(copyUsers);
    localStorage.setItem("all-Users" , JSON.stringify(copyUsers))
    
  }

  return (
    <>
      <div className="h-screen bg-black text-white">
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-wrap px-2 py-2'>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 px-5 py-2 rounded m-2 w-[48%] text-xl font-semibold' type="text"
            placeholder='Enter Name' />

          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className='border-2 px-5 py-2 rounded m-2 w-[48%] text-xl font-semibold' type="text"
            placeholder='Image URL' />

          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className='border-2 px-5 py-2 rounded m-2 w-[48%] text-xl font-semibold' type="text"
            placeholder='Enter Role' />

          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='border-2 px-5 py-2 rounded m-2 w-[48%] text-xl font-semibold' type="text"
            placeholder='Enter Description' />

          <button
            className=' px-5 py-2 rounded m-2  bg-green-600 w-[97%]  active:scale-95 cursor-pointer'>Create User</button>
        </form>

        <div className='flex flex-wrap gap-4 px-4 py-10'>
          {
            allUsers.map((user, idx) => {
              return <Card user={user} idx={idx} handleDelete={handleDelete}/>
              
            })
          }
        </div>

      </div>
    </>
  )
}

export default App
