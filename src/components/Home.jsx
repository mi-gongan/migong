import React from 'react'
import styled from 'styled-components'
import Faceshape from './Faceshape'


const Wrap=styled.div`
  background-color:white;
` 

function Home() {

  return (
    <Wrap>
      <Faceshape></Faceshape>
    </Wrap>
  )
}

export default Home
