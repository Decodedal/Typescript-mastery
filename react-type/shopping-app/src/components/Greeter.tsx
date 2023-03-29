import React from 'react'

//we can use an inteface to describe the shape of our props

interface GreeterProps{
    person:string
}

const Greeter = ({person} : GreeterProps):JSX.Element => {
  return ( 
    <h1>Hello {person}</h1>
  )
}

export default Greeter