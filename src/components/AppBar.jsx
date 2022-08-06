import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Box=styled.div`
  width: 100%;
  height: 60px;
  text-align:center;
  line-height:60px;
  font-style: normal;
  font-weight: 650;
  font-size: 24px;
  letter-spacing: 0.025em;
  
`;

function AppBar() {
  return (
    <Link to='/home' style={{textDecoration:'none',color:'black'}}><Box>migong</Box></Link>
  )
}

export default AppBar