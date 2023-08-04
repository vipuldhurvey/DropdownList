import './style.css';
import Dropdown from './Dropdown';
import { useState } from 'react';
export default function App() {
  const [selected , setSelected] = useState("Choose One");
  return (
    <div className="App">
     
     <Dropdown selected = {selected}  setSelected={setSelected} />
    </div> 
  );
}