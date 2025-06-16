import React, { useState } from 'react'

function Color_picker() {
    const [color, setcolor] = useState("#FFFFFF");
        function handleColor(e){
            setcolor(e.target.value);
        }
  return (
    <div style={{alignItems:'center' , justifyContent: 'center', textAlign:'center'}}>
      <h1 style={{ color:'black'}}>Color Picker:{color}</h1>
      <input type="color" name="color" id="color" onChange = {handleColor} value={color}/>
      <div className='color-display' style={{background: color , width:'1366px', height:'500px',  textAlign:'center', alignItems:'center',justifyContent:'center', border:'3px solid grey', borderRadius:'30px', overflowY:'hidden'}}>
       
      </div>
</div>
  )
}

export default Color_picker