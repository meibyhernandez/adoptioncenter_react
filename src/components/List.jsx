import axios from 'axios';
import { useEffect, useState } from 'react'

import { fetchFromAPI } from '../utils/fetchFromAPI'

function List ()  {
  
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        fetchFromAPI().then(res =>{
            console.log(res)
            setCats(res)
        })
        .catch(err=>{
            console.log(err)
        })
    })


  return (
    <div>
        <ul>
           {cats.map(cat=> (
            <li key={cat.id}>
               
                <img src={cat.url}></img></li>
           ))}
        </ul>
    </div>
  )
}

export default List