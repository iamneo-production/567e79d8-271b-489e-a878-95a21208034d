import React from "react";
import "./SectionTable.css"
import { useNavigate } from "react-router-dom";

export default function SectionTabline(props)
{

    const his=useNavigate();
  
    return(
      <div className="sectionstyle">
        <div className="titles">
        <h2 className="title">{props.titles}</h2>
        <a onClick={his(`/results?query=${props.title}`)}>click to go</a>
        </div>
      </div>
      )
}
