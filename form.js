import React, {useState} from 'react'

function Form({allList ,setallList}) {
  let [list , setList] = useState([]);
  console.log(list);
  function AddNewList(e) {
		e.preventDefault();
    console.log(e.target.value)
    const newList = {
      list : list,
      completed : false,
      id : Date.now()
    }
    setallList([...allList ,newList])
    console.log("NEWLIST HERE")
    console.log(newList.list);
  }
  
  return (
    <form classNaallList="form">
      <div>
        <input value={list}
        onChange = {(e) => setList(e.target.value)} />
        <span>
          <button  onClick={(e) => AddNewList(e)}  value ={list}>Go!</button>
        </span>
      </div>
    </form>
  )
}
export default Form