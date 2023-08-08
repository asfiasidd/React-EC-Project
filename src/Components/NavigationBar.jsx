import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


function NavigationBar() {
  const navbarStyle = {
    backgroundColor: 'rgb(202, 148, 224)', 
    border: '2px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };
    return (
      <Navbar style={navbarStyle} expand="lg">
        <Container>
          <Link to="#home">Super-Mart</Link>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/Products">Products</Link>
              <Link className='nav-link' to="/Login">Login</Link>
              <Link className='ms-4 btn btn-dark' to="/SignUp">SignUp</Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    );
  }
  
  export default NavigationBar;