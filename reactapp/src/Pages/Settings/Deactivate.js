import React from 'react'
import Button from "@mui/material/Button";
import "./Deactivate.css";

export default function DeactiveAcc({close}){
  return (
    <div className='Acc-overlay'>
    <div className='deactivateAcc'>
        <header className='pop-head'>
        <h2>Deactivate Account</h2>
        </header>

        <content className='pop-content'>
          <p>We’re sad to see you go, but we’ll try to make this easy as possible.</p>
        <p><b>Before you go, know these important details...</b></p>
        <li>Once completed, your account will be immediately deactivated.</li>
        <li>You won't be able to access your details or favourites anymore.</li>
        <li>If you change your mind you can reactivate your account anytime by contacting support team.</li><br/><br/><br/>
       
        </content>

        <footer className='pop-footer'>
        <Button variant='outlined' onClick={()=>close(false)}>Cancel</Button>
        <Button variant='contained'>Continue</Button>
        </footer>
    </div>
    </div>
  )
}
