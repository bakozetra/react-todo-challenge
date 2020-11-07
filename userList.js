import React, { useState } from 'react'

function UserList () {
  const [ isToggle , setIsToggle] = useState(false)

  function toggle () {
    setIsToggle(prev => !prev)
  }
  return [ isToggle , toggle]
}
export default UserList