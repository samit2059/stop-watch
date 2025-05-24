import React from 'react'
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import   './Navbar.css';
function Navbar() {
      // useEffect(() =>{
      //   console.log('hello');
      // },[])
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
    <div className='Nav-bar'> 
       {/* <div style={colorStyle}  className='Nav-bar' >  */}
    {/* // <div className={`Nav-bar ${colorStyle.color === 'black' ? 'white' : ''}`}> */}

        {/* <h1>My fav color is {colorStyle.color}</h1> */}
 {/* <div  > */}
      <nav className="navbar navbar-expand-lg"style={colorStyle} >
  <div className="container-fluid"style={colorStyle} >
    <Link className="navbar-brand" to="/" style={colorStyle}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"style={colorStyle}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"style={colorStyle}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          {/* <a className="nav-link active"aria-current="page" href="#" style={colorStyle}>Home</a> */}
          <Link className="nav-link active"aria-current="page" to="/" style={colorStyle}>Home</Link>

        </li>
        <li className="nav-item" >
          {/* <a className="nav-link" href="#"style={colorStyle}>Link</a> */}
           <Link className="nav-link active" aria-current="page" to="/Counter" style={colorStyle} >Counter</Link>
        </li>
         <li className="nav-item" >
          {/* <a className="nav-link" href="#"style={colorStyle}>Link</a> */}
           <Link className="nav-link active" aria-current="page" to="/Like" style={colorStyle} >Word-Text</Link>
        </li>
        </ul>
        <button onClick={ToggleColor} className="btn btn-primary px-3" style={colorStyle}>{mode}</button>
  <form className="d-flex form-control-sm" role="search"style={colorStyle} > 
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={colorStyle}/>
        <button className="btn btn-sm-outline-success " type="submit"style={colorStyle}>Search</button>
      </form> 
    </div>
  </div>
</nav>
    </div>
    // </div>
  )
}

export default Navbar
