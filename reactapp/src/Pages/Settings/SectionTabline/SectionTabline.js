import React from "react";
import "./SectionTable.css"
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SectionTabline(props)
{

    const his=useNavigate();
    const NavigateToSearch=()=>
    {
      his(`/results?query=${props.title}`)
    }
  
    return(
      <div className="sectionstyle">
        <div className="titles">
        <h2 className="title">{props.title}</h2><br/>
        <Button variant="outlined" id="nav-search"onClick={NavigateToSearch}>click to go</Button>
        </div>
      </div>
      )
}
