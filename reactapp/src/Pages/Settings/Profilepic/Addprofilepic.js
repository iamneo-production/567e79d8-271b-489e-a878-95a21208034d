import React from 'react';
import Button from "@mui/material/Button";
import "./Addprofilepic.css"
import TextField from "@mui/material/TextField";
import axios from 'axios';

export default function Addprofilepic({close}) {
  const [imgsel,setImgsel]= React.useState({imgurl:""});

  function imgselchange(event) {
    setImgsel(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

  function UploadImageUrl()
  {
    axios.put("http://localhost:8080/user/dp/1", imgsel)
            
            close(false)
  }
  return (
    <div className='dpchange-overlay'>
        <div  className='ChangeAccdp'>
            <h1 >Add Profile Picture</h1>
            <TextField
            label="Paste Image Url"
            name='imgurl'
            onChange={imgselchange}
            /><br/>
            <div className='dpchange-btnorder'>

            <Button id="dpchange-btn1" variant='contained' onClick={()=>{UploadImageUrl()}}>Upload</Button>
            <Button variant='outlined' id="dpchange-btn2" onClick={()=>close(false)}>Cancel</Button>
            </div>
        </div>
    </div>
  )
}
