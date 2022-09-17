import React from 'react'
import {AiOutlineSend} from 'react-icons/ai';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logo from "../images/logo.svg";


const Nav = styled.div`
background-color: #FFFF;
text-align: center;
position: fixed;
width: 100%;
height: 80px;
left: 0;
top: 0;
text-align: center;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

`

function Navbar() {
  return (
    <Nav>
       
        <Link to="/" style={{textDecoration:'none'}}>
        <img style={{ padding: 7.5 }} height="25" src={Logo} alt="logo" />
        </Link>
       
      </Nav>
  )
}

export default Navbar