import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const HomePage = () => {
  return (
    <div  className="text-center mt-5">
        <h1>WELCOME</h1>
        <Button variant="success" as={Link} to="/login">Login</Button>
        <Button variant="danger">Logout</Button>
    </div>
  )
}
export default HomePage