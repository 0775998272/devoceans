import React,{useState} from 'react'
import Home from './pages/Home';
import styled from 'styled-components';
import ItemDetails from './pages/ItemDetails';
import { Routes, Route } from 'react-router-dom';
import Table from './components/Table';
import Navbar from './components/Navbar';

const Container= styled.div`
font-family: 'Glory', sans-serif;
/* margin: 0;
padding: 0; */

`
const Wrapper =styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top:90px;
padding-top:45px;
background-color:#F8F8FA;
width: 100%;
@media (max-width: 700px) {
    padding-top: 10px;
  }

  
`

function App()  {
  const [company, setCompany] = useState([]);
  return (
  
    <Container>
     
     <Navbar/>
      <Wrapper>
      
      <Routes>
        <Route exact path="/" element={<Home company={company} setCompany={setCompany}/>}/>
       
         <Route path="company/:companyId"element={ <ItemDetails  company={company}/>} /> 
       
        </Routes>
    
    </Wrapper>
   
    </Container>
   
  )
}

export default App