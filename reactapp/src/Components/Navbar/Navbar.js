import classes from "./navbar.module.css"
import { useNavigate } from "react-router-dom"
import avatar from "../../assets/userpageimg/avatar.png"
import React, {useState} from "react"


function Navbar(){

    const[model,setModel]=useState(false);

    const toggleModel = () =>{
        setModel(!model);
    }
   

    let navigate =useNavigate()
    function helpHandler(){
        navigate("/help")
    }
    function findagentHandler(){
        navigate("/agent")
    }

    return(
        <div className={classes.main}>
            <div className={classes.icon}>
                <h className={classes.logo}><b>Elite Estates</b></h>
            </div>
            <div className={classes.menu}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Agent</a></li>
                    <li><a href="/help" onClick={helpHandler}>Help</a></li>
                </ul>
            </div>
            <div className={classes.avatar}>
                <img  onClick={toggleModel} src={avatar} alt=""/>
            </div>
            {model &&(
                         <div className={classes.model}>
                             <div className={classes.overlay}>
                             <div className={classes.model_content}>
                                 <ui> 
                                     <li><a href="#">MyProfile</a></li>
                                     <li><a href="#">Favourites</a></li>
                                     <li><a href="#">Logout</a></li>
                                </ui> 
                                <button className={classes.close_model} onClick={toggleModel}>X</button>
                             </div>
                             </div>
                         </div>
            )}
            
        </div>
    );
}

export default Navbar