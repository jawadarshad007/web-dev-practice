import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
const FetchData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        // fetch('https://jsonplaceholder.typicode.com/todos')
      // .then(response => response.json())
      .then((response)=>{
        // console.log(response)
        setData(response.data)
        // console.log("-------------------------------------------------------")
        // console.log(response.data)
        setLoading(false)
    })

    },[])
  return (
    <div>
      {loading ? <h1>Loading... </h1>
      :(
        <ul>
            {data.map((item) => {
        return  <li key={item.id}>{item.title}</li>
    })}
        </ul>
      )
      }
    </div>
  )
}

export default FetchData
