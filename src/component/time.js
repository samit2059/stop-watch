import React from 'react'
import { useState } from 'react';
import './time.css'; // ✅ make sure this matches the file name & location

function Time() {
    const [colorStyle, setColorStyle] = useState(
        {
            color:'black',
            background:'white',
        }
    );
    const [mode , setMode] = useState('dark mode');
    // const [background, setBackground] = useState('black');
    // const boxStyle = {
    //     color:color,
        // background:color,
    // }
    const ToggleColor =() => {
        // setColor((prevColor) => (prevColor === 'white'? 'black': 'white'));
        // setMode((prevColor) => (prevColor === 'dark mode'? 'light mode': 'dark mode'))
        if(colorStyle.color === 'black'){
            setColorStyle({
                 color:'white',
            background:'black',
            })
            setMode('light mode');
        }
        else{
             setColorStyle({
                 color:'black',
            background:'white',
            })
            setMode('dark mode');
        }
    }
  return (
    <div style={colorStyle} className='Nav-bar' > 
        {/* <h1>My fav color is {colorStyle.color}</h1> */}
 {/* <div style={colorStyle}> */}
      <nav className="navbar navbar-expand-lg" style={colorStyle}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={colorStyle}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={colorStyle} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={colorStyle}>Link</a>
        </li>
        </ul>
        <li className="nav-item" style={colorStyle}>
        <button onClick={ToggleColor}>{mode}</button>
        </li>
      <form className="d-flex" role="search" style={colorStyle}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Time
