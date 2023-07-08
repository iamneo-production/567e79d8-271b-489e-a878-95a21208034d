import React from "react";
import Ndesign from "../../Components/Ndesigns";

export default function Notifications()
{
    const [notidata,setNotidata]=React.useState([]);
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(res => res.json())
            .then(data => setNotidata(data))
    })
    return(
        <div className="notis">
            <h2 style={{position:"sticky"}}>Notifications</h2><hr/>
            {notidata ? (
                notidata.map((notidata) => (
                    <Ndesign  title={notidata.title} date={notidata.id}/>
                ))
            ) : (
                <p>Loading...</p>
            )} 
        </div>
    )
}