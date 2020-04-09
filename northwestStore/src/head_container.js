import React from 'react'
import * as bs from 'react-bootstrap'
import Logo from './Media/logo.png';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import AppContext from './context'

function Headcontainer(props) {
  // const context = React.useContext(AppContext)

   return (
      <bs.Navbar bg="light" expand="lg" >
        <Link to='/'>
              <bs.Navbar.Brand>
                <img alt="Logo" style={{height: 40}} src={Logo}></img> 
              </bs.Navbar.Brand>
            </Link>
        <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <bs.Navbar.Collapse id="basic-navbar-nav">
          <bs.Nav className="mr-auto" >
            <Link to='/home' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/checkout' className='nav-link'>Prediction Calculator</Link>
          </bs.Nav>
          <bs.Nav>
            <bs.NavDropdown title="Welcome" alignRight> 
              <bs.NavDropdown.Item href="#action/3.1">My Account</bs.NavDropdown.Item>
              <bs.NavDropdown.Divider />
              <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
            </bs.NavDropdown>
          </bs.Nav>
        </bs.Navbar.Collapse>
      </bs.Navbar>
   )
}

export default Headcontainer;