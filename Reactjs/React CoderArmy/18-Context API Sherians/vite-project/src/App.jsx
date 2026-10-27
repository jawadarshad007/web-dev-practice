import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'



// Context API is used to centralized data , taaqe jis ko zaroorat ho us data ki wo acess kr skahe , isse hm prop drilling sa bach jatte hn
// first make context in context file and then wrap whole <App/> with context file , taqe is context ka data tamam components access kr shakn 

const App = () => {
  return (
    <div>
      <Navbar>
        <h4>This become children of Navbar</h4> 
        <p>This become 2nd children of Navbar</p> 
        {/* you can access this childrens by props under children property in Navbar  */}
      </Navbar>
      <Sections/>
      <Footer/>

    </div>
  )
}

export default App