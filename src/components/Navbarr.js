import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Navbarr = () => {
  return (
    <div className='sticky-navbar'>
      <Navbar className='p-3' bg="dark" data-bs-theme="dark">
        <Container>
          <Link to='/' style={{textDecoration: 'none'}}>
            <Navbar.Brand><FontAwesomeIcon icon={faReact} spin className='mx-2'/>Pokédex</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr
