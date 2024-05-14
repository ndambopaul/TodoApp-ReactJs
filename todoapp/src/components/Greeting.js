import React from 'react'

const Greeting = (props) => {
  return (
    <div>
        <h3>Hello {props.full_name}</h3>
    </div>
  )
}

export default Greeting