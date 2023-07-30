import React from 'react'
import "./SearchHistory.css"
import SectionTabline from '../SectionTabline/SectionTabline'
import axios from 'axios'

export default function SearchHistory() {
    const [api, setApi] = React.useState([])

    // axios.get("http://localhost:8080/users/1")
    // .then(res=>{
    //     if (Array.isArray(res.data)) {
    //     setApi(res.data);}
    // })
        
    console.log(api)

    return (
        <div className='history'>
                <SectionTabline  title="Bangalore" titles="Bangalore" />
        </div>
    )
}
