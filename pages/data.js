import { useState } from 'react'

function Data(){
  const [data,setData] = useState([])
  
   const getData=async()=>{
     const res = await fetch('api/person')
     const jsonData = await res.json()
     setData(jsonData)
   }
   return (
     <>
        <button onClick={getData}>Fetch</button>
       {
          data.map((da)=>{
            return (
              <div key={da.id}>
                <h3>{da.name}</h3>
                <div>{da.email}</div>
                <div>{da.address.city}</div>
              </div>
            )
          })
         
       }
     </>
   )
 }
export default Data