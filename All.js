import { func } from "prop-types"
import React from "react"
import Form from './form'
function All({allList , setallList , handleChangeAll}) {
  console.log(allList.id)
 
    return (
      <>
        <h1>All</h1>
        { 
        allList.map( list => {
         return <div key={list.id}>
               <input type="checkbox" 
                checked={list.completed ? 'checked' : ""} 
                onChange={() => handleChangeAll(list.id)}
               />
             <label >{list.list}</label>
       </div>
       })}
     </>
    )
}
export default All