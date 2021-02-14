import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = ({ projects }) => {
  
  return (
    <>
      <h1>Welcome To Bradley's React Sandbox</h1>
      <p>This project was created as a sandbox environment for building anything using React. Most pages were created solely for testing minimal functionality and no styling was applied.</p>
      <div style={{ display: 'flex', flexDirection: 'column', padding: 32 }}>
        {projects.map(project => <Link to={`/${project}`}>{project}</Link>)}
      </div>
    </>
  )
}

export default Welcome
