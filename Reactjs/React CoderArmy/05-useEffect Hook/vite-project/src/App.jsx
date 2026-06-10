import { useEffect, useState } from "react"




function App(){

  const [users, setUsers] = useState([])
  // const [value,setValue] = useState("")
  const [count,setCount] = useState(10)



  //ya aik issue create kr rha ha , data ane par bar bar re-render ho rha ha , is liye useEffect hook is ka solution ha .
// async  function githubProfiles(){
//     const responce = await fetch("https://api.github.com/users")
//     const data = await responce.json()
//     // console.log(data)
//     setUsers(data);
//     console.log("checking")
//   }
//   githubProfiles()



// Jab bhi data fetch krwana ho to useEffect hoo ka use hota ha.  
// is ma ya jo callback funciton ha wo code ma sab sa last ma execute ho ga.
// is ma agr empty array pass kro to ya only one time execute hota ha. re-render hone pr yaa dobara apne callBack funciton ko execute nai kre ga.
useEffect(()=>{
async  function githubProfiles(){
    const responce = await fetch(`https://api.github.com/users?per_page=${count}`)
    const data = await responce.json()
    // console.log(data)
    setUsers(data);
    console.log("checking")
  }
  githubProfiles()
},[count]) // ab jab jab count ki value change ho gyi ye useEffect re-render ho ga

// function handleChange(e){
//   console.log(e.target.value)
//   setValue(e.target.value.toUpperCase())

// }

  return (
    <>
    <h1>Github Users</h1>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap" , gap:"5px"  }}>
      {

        users.map(user=>{
          return  <img src={user.avatar_url} alt="userProfile" height={"100px"}  width={"100px"}  key={user.login}  />
})

      }
    </div>
    </>
    )
}
export default App;