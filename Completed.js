import React from "react"
import Form from './form'

function Completed({allList , setallList , handleChangeAll}) {
   function deleted (id) {
      const deletedList = allList.filter(list => list.id !== id)
      setallList(deletedList)
   }
    return (
      <>
        <h1>Completed</h1>
        { 
        allList.filter( list => list.completed == true).map( list => {
         return( <div key={list.id}>
               <input type="checkbox" 
               checked={list.completed ? 'checked' : ""} 
               onChange={handleChangeAll}/>
             <label >{list.list}</label>
             <button type ="button" onClick ={() => deleted(list.id)}>deleted</button>
       </div>
         )
       })}
       </>
    )
}
export default Completed