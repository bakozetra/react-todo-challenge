import React, { useEffect, useState } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import All from './All'
import Completed from './completed'
import Active from './Active'
import Form from './form'

function App(id) {
  let [allList, setallList] = useState([]);

  function handleChangeAll(id) {
    const filterList = allList.map(
      list =>
        (list.id === id ? { ...list, completed: true } : list))
    setallList(filterList)
  }

  return (
    <div>
      <Link to='/'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/completed'>Completed</Link>
      <Switch>
        <Route path="/completed"><Completed
          allList={allList} setallList={setallList}
          id={allList.id}
          setallList={setallList}
          handleChangeAll={handleChangeAll} /></Route>
        <Route path="/active"><Active allList={allList} setallList={setallList}
          id={allList.id} handleChangeAll={handleChangeAll} /></Route>
        <Route path="/"><All allList={allList} setallList={setallList}
          id={allList.id} handleChangeAll={handleChangeAll} /></Route>
      </Switch>
      <Form allList={allList} setallList={setallList} />
    </div>

  )
}
export default App