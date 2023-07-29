import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LockPersonTwoToneIcon from '@mui/icons-material/LockPersonTwoTone';
import gif1 from "../../../assets/Forgotpasswordimg.gif"
import "./Changepassword.css"
import axios from "axios";

export default function Changepass() {
    const [editable, setEditable] = React.useState(false);
    const [passform, setPassform] = React.useState({ currentpass: "", password: "", confirmnewpass: "" })

    const editpass = () => {
        setEditable(!editable);
    }

    const inputchange = (e) => {
        setPassform({ ...passform, [e.target.name]: e.target.value });
    };

    const isPasswordValid = () => {
        if (passform.newpass.length < 6) {
            return false;
          }
      
          if (!/[a-z]/.test(passform.newpass)) {
            return false;
          }
      
          if (!/[A-Z]/.test(passform.newpass)) {
            return false;
          }
      
          if (!/[@$!%*?&]/.test(passform.newpass)) {
            return false;
          }
      
          return true;
    }

    const passstatus = () => {
        if (!passform.currentpass || !passform.newpass || !passform.confirmnewpass) {
            toast.warn('Please fill in all fields.',
             { position: toast.POSITION.BOTTOM_RIGHT });
            setEditable(true);
            return;
        }

        if(!isPasswordValid(passform.newpass))
        {
            toast.warn("New password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            , { position: toast.POSITION.BOTTOM_RIGHT })
            setEditable(true)
            return
        }

        if (passform.newpass !== passform.confirmnewpass) {
            toast.warn('New password and confirm new password must match.', 
            { position: toast.POSITION.BOTTOM_RIGHT });
            setEditable(true);
        }
        else {
            axios.put('http://localhost:8080/user/changepass/1', passform)
                .then(Response => {
                    toast.success("saved", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    }); console.log(Response);
                });
            }setEditable(false)}

    

    return (
        <div id="massbody">
            <h2 id="formtitle">CHANGE PASSWORD</h2>
            <img src={gif1} id="gifed" />
            <form id="passfield">
                <LockPersonTwoToneIcon id="passicon" />
                <p>Use the form below to change the password for your  account</p>
                <TextField
                    type="password"
                    variant="outlined"
                    label="Current Password"
                    disabled={!editable}
                    value={passform.currentpass}
                    onChange={inputchange}
                    name="currentpass"
                    
                /><br /><br />

                <TextField
                    type="password"
                    variant="outlined"
                    label="New Password"
                    disabled={!editable}
                    value={passform.newpass}
                    onChange={inputchange}
                    name="password"
                    
                /><br /><br />

                <TextField
                    type="password"
                    variant="outlined"
                    label="Confirm New Password"
                    disabled={!editable}
                    value={passform.confirmnewpass}
                    onChange={inputchange}
                    name="confirmnewpass"

                /><br /><br />

                {
                    editable ? (<Button variant="outlined"
                        onClick={() => {
                            editpass()
                            passstatus()
                        }
                        }>Save</Button>) : 
                        (<Button 
                            variant="outlined" onClick={editpass} id="updatepass"
                            >Update Password</Button>)
                }
            </form>
            <ToastContainer autoClose={1500} />
        </div>
    )
}