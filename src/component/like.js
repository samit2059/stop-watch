import React from 'react'
import { useState, useEffect } from 'react'
function Like() {
  useEffect(()=>{
    document.title = 'Mini-Project/Like'
  },[])
    const [liked, setliked] = useState(false);
    const [text, settext] = useState('');

    const handleonText = (e)=>{
      settext(e.target.value);
    }
    function handlelike(e){
            setliked(e.target.checked);
        }
  return (
    <div style={{display: 'flex', flexDirection:'row'}}>
    <div style={{ textAlign: 'center', marginTop: '20px', border:'2px solid black', width:'250px',}} className='new'>
        <img src="./assests/new.jpg" 
        alt="not available right now"
        style={{width:'250px', height: '350px', borderRadius: '10px', padding:'5px'}} />
        <br />
        <label >
            <input type="checkbox" name="likedone" id="liked" checked={liked} onChange={handlelike}/>
             <p>You {liked ? 'liked' : 'did not liked'} picture</p>
        </label>
          <input type="submit" value= "submit" />
       <label for='review'><p>Comments: </p>
       <textarea name="review" id="review" rows="2" cols="20" value={text} onChange={handleonText}>
       </textarea>
</label>
    </div>
    <div className="text-main" style={{ textAlign: 'center', marginTop: '20px', border:'2px solid black', width:'350px',marginLeft:'20px'}}>
      <h3>Words Details :-</h3>
      <hr />
      <p>You Commented : {text} </p>
  <p>No of Letters: {(text.length)===0 ? '0': (text.length)}</p>
  <p>No of Words: {text.split(/\s+/).filter((element) =>{return element.length !== 0}).length}</p>
  <p>No of Sentence: {(text.length)===0 ? '0': text.split('. ').length}</p>
    {/* <p>{text.toUpperCase()}</p> */}
    </div>
    </div>
  )
}

export default Like
