import React from 'react'

const ColorBox = ({color}) => {
    const copyToClipboard = () =>{
        navigator.clipboard.writeText(color);
        // document.getElementsByClassName('box1').style.boxShadow = '0 5px 10px rgba(0,0,0,0.8)';
        alert("color copied");
    };
  return (
    <div className='box1'  onClick={copyToClipboard}  style={{
              backgroundColor: color,
              width: '200px',
              height: '300px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
            }}>
      <div className="color-box" style={{background: color}}>{color}</div>
    </div>
  )
}

export default ColorBox
