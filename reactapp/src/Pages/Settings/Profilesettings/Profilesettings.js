import React from 'react'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Deactivate from '../Deactivate/Deactivate';
import "./userstyle.css"
import Addprofilepic from '../Profilepic/Addprofilepic';
import axios from "axios";
import SearchHistory from '../SearchHistory/SearchHistory';
import { API_BASE_URL } from '../../../Config';



export default function Profile() {
    const [showdeactivate,setShowdeactivate]=React.useState(false);
    const [showAdddp,setShowAdddp]=React.useState(false);
    const [showPro,setShowPro]=React.useState(true);
    const [showHistory,setShowHistory]=React.useState(false);

    const [fullformdata, setFullformdata] = React.useState(
        { name: "", email: "", phone: "", address: "", bio: "",gender:""}
    )


    const forsave = () => {
        console.log(fullformdata)
        console.log("hi")
        axios.put(`${API_BASE_URL}/users/1`,fullformdata)
        .then(res=>{toast.success("saved",{
            position: toast.POSITION.BOTTOM_RIGHT,
        });console.log(res)})
        .catch(err=>console.log("error",err))
    };


    
    

    function formdatachange(event) {
        setFullformdata(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const changedp=()=>
    {
        setShowAdddp(!showAdddp);
    }

    const deleteAcc=()=>
    {
        setShowdeactivate(!showdeactivate);
    }

    const showprofile=()=>
    {
        setShowPro(true);
        setShowHistory(false);
    }

    const showhis=()=>
    {
        setShowPro(false);
        setShowHistory(true);
    }

    return (
        <div className='fullprofile'>
            <div className='profile1'>
                <Avatar id="dpfor1" /><br />
                <Button variant="contained"
                    id="chngimg"
                    onClick={changedp}
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

                <Link to="/forgot-pwd" id="pwdroute1">
                    <Button variant='outlined' id="pwdroute">Update Password</Button>
                </Link>

                <Button variant="contained" id="daac" onClick={deleteAcc}>Deactivate Account</Button>
            </div>

            <div className='profile2'>
                <div id="btn-position">
                <Button variant='outlined' id={showPro?"head":""} onClick={showprofile} >PROFILE</Button>
                <Button variant='outlined' id={showHistory?"head":""} onClick={showhis} >HISTORY</Button>
                </div>
                <div className='field'>
                  {showPro&&  <form className="field1" >
                        <div>
                            <TextField
                                label="Full Name" variant="outlined"
                                onChange={formdatachange}
                                name="name"
                                autoComplete="off"
                                id="inputline"
                            />
                            <br /><br></br>
                            <TextField
                                label="Email" variant="outlined"
                                onChange={formdatachange}
                                disabled
                                name="email"
                                autoComplete="off"
                                id="inputline"
                            />
                            <br /><br></br>


                            <TextField
                                label="Phone Number" variant="outlined"
                                onChange={formdatachange}
                                name="phone"
                                autoComplete="off"
                                id="inputline"
                            />
                            <br /><br></br>
                            <TextField
                                label="Address" variant="outlined"
                                onChange={formdatachange}
                                name="addresss"
                                autoComplete="off"
                                id="inputline"
                            />
                            <br /><br></br>

                            <FormControl>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            id="mf"
                            label="Gender"
                            value={fullformdata.gender}
                            onChange={formdatachange}
                            name="gender"
                        >
                            <MenuItem value='male' id="mgopt">Male</MenuItem>
                            <MenuItem value='female' id="fgopt">Female</MenuItem>
                            <MenuItem value='other' id="ogopt">Other</MenuItem>
                        </Select>
                    </FormControl><br /><br />
                            

                            <TextField label="Bio"
                                onChange={formdatachange}
                                name="bio"
                                autoComplete="off"
                                id="inputline"
                            />

                        </div><br/>
                        <Button variant="contained" onClick={forsave} >Save</Button><br/>


                    </form>}
                    {showHistory&& <SearchHistory/>}
                    {showdeactivate&&<Deactivate close={setShowdeactivate}/>}
                    {showAdddp&& <Addprofilepic close={setShowAdddp}/>}
                    <ToastContainer autoClose={1000} />
                </div>

            </div>
        </div>


    )
}