import React from 'react'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Notifications from './Notification';
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import "./userstyle.css"
// import axios from "axios";



export default function Profile() {
    const [shownoti, setShownoti] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [fullformdata, setFullformdata] = React.useState(
        { name: "", email: "", phone: "", address: "", bio: "",gender:""}
    )

    const forEdit = () => {
        setEdit(!edit);
    };

    const forSave = () => {
        setEdit(false);
    };


    const notify = () => {
        toast.success("saved", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

    const displaynoti = () => {
        setShownoti(!shownoti);
    }

    function formdatachange(event) {
        setFullformdata(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // console.log(fullformdata.gender);
    return (
        <div className='fullprofile'>
            <div className='profile1'>
                <Avatar id="dpfor1" /><br />
                <Button variant="contained"
                    id="chngimg"
                    type="file"
                    accept="image/*"
                >Change image
                </Button><br />
                <h4 style={
                    {
                        color: 'white',
                        position: 'absolute',
                        marginLeft: 120
                    }
                }>{fullformdata.name}</h4>

                <h4 style={
                    {
                        color: 'white',
                        position: 'absolute',
                        marginTop: 50,
                        marginLeft: 120
                    }
                }>{fullformdata.email}</h4>

                <Link to="/pwd" id="pwdroute1">
                    <Button variant='outlined' id="pwdroute">Update Password</Button>
                </Link>

                <Button variant="contained" id="daac">Deactivate Account</Button>
            </div>

            <div className='profile2'>
                <NotificationsNoneOutlinedIcon id="noticon" onClick={displaynoti} />
                <h1 id="title-head">My Profile</h1>
                {shownoti && <Notifications />}
                <div className='field'>
                    <form className="field1" >
                        <div>
                            <TextField
                                label="Full Name" variant="outlined"
                                disabled={!edit}
                                onChange={formdatachange}
                                name="name"
                                autoComplete="off"
                            />
                            <br /><br></br>
                            <TextField
                                label="Email" variant="outlined"
                                onChange={formdatachange}
                                disabled
                                name="email"
                                autoComplete="off"
                            />
                            <br /><br></br>


                            <TextField
                                label="Phone Number" variant="outlined"
                                onChange={formdatachange}
                                disabled={!edit}
                                name="phone"
                                autoComplete="off"
                            />
                            <br /><br></br>
                            <TextField
                                label="Address" variant="outlined"
                                onChange={formdatachange}
                                disabled={!edit}
                                name="address"
                                autoComplete="off"
                            />
                            <br /><br></br>

                            <Select  
                            id="mf" 
                            value={fullformdata.gender} 
                            onChange={formdatachange} 
                            name="gender"
                            disabled={!edit}>
                                <MenuItem value='male' id="mgopt">Male</MenuItem>
                                <MenuItem value='female' id="fgopt">Female</MenuItem>
                                <MenuItem value='other' id="ogopt">Other</MenuItem>
                            </Select><br/><br/>

                            <TextField label="Bio"
                                onChange={formdatachange}
                                disabled={!edit}
                                name="bio"
                                autoComplete="off"
                            />


                        </div>


                    </form><br />
                    {edit ? (
                        <Button variant="contained" type="submit" onClick={() => {
                            forSave()
                            notify()
                        }}>Save</Button>
                    ) : (
                        <Button variant="contained" onClick={forEdit}>Edit</Button>
                    )}
                    <ToastContainer autoClose={1000} />
                </div>
            </div>



        </div>


    )
}