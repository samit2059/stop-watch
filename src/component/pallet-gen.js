import React, { useState } from 'react'
import ColorBox from './colorBox';
 function generateRandomColor(){
          return Array.from({ length:5}, () =>
              `#${Math.floor(Math.random() * 16777215).toString(16)}`
          );  
      }
function Pallet_gen() {
  const [color, setColor] = useState(generateRandomColor());

    const refreshColor = () =>{
        setColor(generateRandomColor());
    };
  return (
    <div className='pallet-box' style={{border:'1px solid black', padding:'20px', margin:'20px', alignItems:'center', textAlign:'center', fontFamily:'sans-serif'}}>
      <h2>Color Pallet Generator</h2>
      <button className='button' onClick={refreshColor} style={{padding:'10px', borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              color: 'wheat',
              background:'light red',
              fontWeight: 'bold', 
              width:'170px',
              height:'50px',
              margin:'10px 0'}}>Generate Pallete </button>
        <div className="row" style={{border: '1px solid black', justifyContent:'space-evenly', padding:'10px'}}>
            {color.map((color, index) =>(
              <ColorBox key = {index} color = {color} />
            ))}
        </div>
    </div>
  )
}

export default Pallet_gen;
