import { useState } from "react"



// React mein Two-Way Data Binding ka matlab hai ke input field aur React state ke darmiyan data dono taraf synchronize hota hai.
// - State → Input: State ki value input field mein show hoti hai.
// - Input → State: User input mein kuch type karta hai, to state update ho jati hai.
// React mein hum usually useState, value aur onChange ki help se two-way binding implement karte hain.

const App = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')

  const [allUsers , setAllUsers] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()

    const oldUsers = [...allUsers]
    oldUsers.push({name , email})
    console.log(oldUsers)

    setAllUsers(oldUsers)

    // const newAllusers = [...allUsers]
    // newAllusers.push(name)
    // setAllUsers(newAllusers)
    // console.log(newAllusers)

    // setAllUsers([...allUsers,name])
    // console.log(allUsers) 
    setName("")
    setEmail("")

  }

  return (
    <div>
      <form onSubmit={(e)=> handleSubmit(e)} >
        <input type="text" placeholder='Enter name' value={name} 
        onChange={(e)=> setName(e.target.value)} required/>

        <input type="email" placeholder='Enter email' value={email} 
        onChange={(e)=> setEmail(e.target.value)} required/>

        <button>Submit</button>
      </form>

      {
        allUsers.map((user)=>{
        return  <div key={user.email}>
          <h4>Name: {user.name}</h4>
          <p>Email: {user.email}</p>
        </div>
        })
      }
    </div>
  )
}

export default App