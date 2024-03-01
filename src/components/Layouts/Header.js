import React, {useState}from "react";
import {Container,Nav,Navbar} from 'react-bootstrap';
import "../../styles/HeaderStyles.css";
import { Link} from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

function Header (){
    const [nav,setNav]=useState();

    //scroll Navbar
    const changeValueonScroll =()=>{
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 100 ? setNav(true) :setNav(false);
    }

    window.addEventListener("scroll",changeValueonScroll);

    return(
        <header> 
         <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : " "}`}>
      <Container>
        <Navbar.Brand href="#home">
            <Link to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid"/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as ={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as ={Link} to="/About">About</Nav.Link>
            <Nav.Link as ={Link} to="/Menu">Our Menu</Nav.Link>
            <Nav.Link as ={Link} to="/Shop">Shop</Nav.Link>
            <Nav.Link as ={Link} to="/Blog">Blog</Nav.Link>
            <Nav.Link as ={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as ={Link} to="/">
                <div className="cart">
                    <i class="bi bi-bag-fill"></i>
                    <em className="roundpoint">3</em>
                </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    );
}

export default Header;