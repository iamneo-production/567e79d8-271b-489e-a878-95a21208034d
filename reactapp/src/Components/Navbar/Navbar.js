import classes from "./navbar.module.css"
import { useNavigate } from "react-router-dom"
import avatar from "../../assets/userpageimg/avatar.png"
import React, {useState} from "react"
import { Link } from "react-router-dom"


function Navbar(){

    const[model,setModel]=useState(false);

    const toggleModel = () =>{
        setModel(!model);
    }
   

    let navigate =useNavigate()
    function helpHandler(){
        navigate("/helppage")
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/agent" onClick={findagentHandler}>Agent</Link></li>
                    <li><Link to="/helppage" onClick={helpHandler}>Help</Link></li>
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
                                     <li><Link to="/settings">MyProfile</Link></li>
                                     <li><Link to="/fav">Favourites</Link></li>
                                     <li><Link to="/">Logout</Link></li>
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