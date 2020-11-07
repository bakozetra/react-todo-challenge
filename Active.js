import React from "react"
function Active({allList , setallList ,handleChangeAll}) {
  return (
    <>
      <h1>Acive</h1>
      { 
        allList.filter( list => list.completed == false).map( list => {
         return( <div key={list.id}>
               <input type="checkbox" 
               onChange={handleChangeAll}/>
             <label >{list.list}</label>
       </div>
         )
        })}
     
    </>
  )
}
export default Active