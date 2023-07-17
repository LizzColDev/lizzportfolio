import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './Header.css'
function Header () {
  return (
    <header>
      <Navbar expand='md' className='mx-auto'>
        <Navbar.Brand as={Link} to='/'>My Portfolio</Navbar.Brand>
        <Navbar.Toggle className='custom-toggle' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>

  )
}

export default Header
