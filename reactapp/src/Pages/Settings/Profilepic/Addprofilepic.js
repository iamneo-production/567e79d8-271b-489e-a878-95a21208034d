import React from 'react';
import Button from "@mui/material/Button";
import "./Addprofilepic.css"

export default function Addprofilepic({close}) {

  const inputRef = React.useRef(null);
  const [imgsel,setImgsel]= React.useState("");


  const refchange =(event)=>
  {
    const imgup =event.target.files[0];
    console.log(imgup);
    console.log("clicked");
    setImgsel(imgup);
  }
  return (
    <div className='dpchange-overlay'>
        <div  className='ChangeAccdp'>
            <h1 >Add Profile Picture</h1>
            <div className='dnd' >
            {imgsel&&(<img src={URL.createObjectURL(imgsel)} id="dp-pick"/>)}
            
            <input type='file'
             ref={inputRef} 
             onChange={refchange}
             hidden/><br/>

            </div>
            <div className='dpchange-btnorder'>

            {imgsel?(<Button id="dpchange-btn1" variant='contained'>Upload</Button>):
            (<Button onClick={()=>inputRef.current.click()} id="dpchange-btn1" variant='contained'>Browse</Button>)}
            
            <Button variant='outlined' id="dpchange-btn2" onClick={()=>close(false)}>Cancel</Button>
            </div>
        </div>
    </div>
  )
}
