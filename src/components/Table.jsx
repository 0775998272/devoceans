import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTable = styled.table`
  border-right: 6px solid lightgrey ;
  border-collapse: collapse;
  background-color: #FFFF;
  width:90%;
   
    padding: 30px;
    color: #706F7D;
    
  
  @media (max-width: 700px) {
    width: 100%;
  }

  td,
  th {
    border-bottom: 3px solid #F8F8FA;
    padding: 15px 10px;
    text-align: left;
    padding-left:40px;
    
  }
 

  tbody tr {
    :hover {
      background-color: #efefef;
    }
     
  }
  thead > tr {  
   background-color:#FFFF;
    color:#C1448E;
    text-transform: uppercase;
    font-weight:900;
   
  }
 
}
  
`;
const Table  =({ data }) =>{
    return(
        
        <StyledTable>
        <thead>
            <tr>
               <th>Name</th> 
               <th>Description</th>
            </tr>
        </thead>
        <tbody>
      {data.map((item) => (
        <tr key={item.id}>  
        <td><Link to={`/company/'${item.id}`} style={{textDecoration:'none',color: "#706F7D" }}> {item.name} </Link> </td>
        <td> {item.description} </td>

        </tr>
        
      ))}
    </tbody>
    
     </StyledTable>
     
        )
}
  
 export default Table;
