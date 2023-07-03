import React from "react";
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
// import Avatar from "@mui/material/Avatar";

export default function Ndesign(props)
{
    return(
      <div className="notification">
      <div className="avatar">
        {/* <Avatar src={props.img} /> */}
      </div>
      <div className="content">
        <h3 className="title">{props.title}</h3>
        <p className="date">{props.date}</p>
      </div>
      <div className="cancel-symbol">
        <ClearSharpIcon/>
      </div>
    </div>
  );
      
}