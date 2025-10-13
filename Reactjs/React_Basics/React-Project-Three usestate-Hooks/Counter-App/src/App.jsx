import './App.css';
import Counter from './components/Counter';
import UseState from './components/UseState';
import Products from './components/Products.jsx'
import { useState } from 'react';

function App() {
  const [data , setData] = useState("");

  return (
    <div>
      <Counter />
      <Products name=" Samsung" model=" A52s" color=" White" data={data}/>
      <UseState  data={data} setData={setData}/>
    </div>
  );
}

export default App;
