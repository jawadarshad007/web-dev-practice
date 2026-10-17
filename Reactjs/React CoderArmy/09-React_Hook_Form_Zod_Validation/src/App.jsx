import { useState } from "react"

function App() {
    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    const [password , setPassword] = useState('')

    function handleSubmit(e){
      e.preventDefault()
      console.log(name)
      console.log(age)
      console.log(password)
    }



  return (
    <>
     <form onSubmit={handleSubmit} >
     <div>
       <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Your Name" />
     </div>

     <div>
       <input type="number" value={age} onChange={(e)=> setAge(e.target.value)}  placeholder="Your Age"/>
     </div>

     <div>
       <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Your Password"/>
     </div>
     <button type="submit">Submit</button>

     {/* abi hamara form bilkul simple ha , hme kud sa error handles krne parhte hn and  bth sa validations lagane parhne hn mean password strong ho , age greater than 10 ho etc
     React Hook hme bth si super Powers deta ha error handle krne ka , bar bar jo component render ho raha ha is sa bachata ha
     to use = npm install react-hook-form
     */}
     </form>
    </>
  )
}

export default App
