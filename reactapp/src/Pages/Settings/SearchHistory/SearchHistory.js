import React from 'react'
import "./SearchHistory.css"
import SectionTabline from '../SectionTabline/SectionTabline'
import axios from 'axios'

export default function SearchHistory() {
    const [api, setApi] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:8080/user/1")
        .then(res => res.json())
        .then(data =>setApi(data.histories))
        .catch(err => console.log("error", err))
}, [api])

    return (
        <div className='history'>
               {api&&
      api.map((dates)=>(
        <SectionTabline title={dates.title}/>
      ))
}
        </div>
    )
}
