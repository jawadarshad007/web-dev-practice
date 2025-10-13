import Usercard from "./components/usercard.jsx"
import './App.css'
import image1 from "./assets/jawadImage.jfif"
import image2 from "./assets/person_2.jpg.webp"
import image3 from "./assets/person_4.jpg.webp"
import Products from "./components/Products.jsx"
import Card from "./components/Card.jsx"

function App() {


  return (
   <div className="container">
     
    <Usercard name= "Jawad Arshad" desc = "Desc 1"  image={image1} style={{"border-radius":"10px"}} />
    <Usercard name = "Second Name" desc = "Desc 2" image={image2} style={{"border-radius":"10px"}}/>
    <Usercard name = "Third Name" desc = "Desc 3" image={image3} style={{"border-radius":"10px"}}/>
      <Products name=" Samsung" model=" A52s" color=" White"/>

      {/* the data between these tags (<Card></Card>) are called children */}
      <Card name="This is name">
        <h1>Learning React</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>

      
   </div>
  )
}

export default App

