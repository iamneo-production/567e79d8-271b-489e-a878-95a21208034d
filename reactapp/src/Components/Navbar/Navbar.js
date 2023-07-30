import classes from "./navbar.module.css"
import { useNavigate } from "react-router-dom"
import avatar from "../../assets/userpageimg/avatar.png"


function Navbar(){
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
                    <li><a href="/agents/" onClick={findagentHandler}>agent</a></li>
                </ul>
            </div>
            <div className={classes.avatar}>
                <img src={avatar} alt=""/>
            </div>
        </div>
    );
}

export default Navbar