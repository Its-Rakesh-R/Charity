import {NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'

function Top_bar(){
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
          <Link to='/'><Navbar.Brand className='fs-3'>Admin page</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link className='px-4'><Link to='/donation'>Donations</Link></Nav.Link>
              <Nav.Link className='px-4'><Link to='/feed'>Feed Data</Link></Nav.Link>
              <Nav.Link className='px-4'><Link to='/occasion'>Celebration Day Donation</Link></Nav.Link>
              </Nav>
              <Link to='/add_child'><Nav className='fs-4'>Add Child</Nav></Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default Top_bar