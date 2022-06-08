import React from 'react'
import styled from 'styled-components'

const Wrap=styled.div`
  margin-top:10px;
  display:flex;
  justify-content: space-evenly;
`;

const Image=styled.div`
  width:40%;
  object-fit: cover;
  font-size:12px;
`;

function AudioContainer() {
  return (
    <Wrap>
      <Image><img className="Image" alt="img" src="https://i.ytimg.com/vi/D9x7Tln2DI4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwgzi3XUJbFfwbYaXHSDHt3eGvFw" /><div>제목이 들어가는 위치입니다.제목이 들어가는 위치입니다</div></Image>
      <Image><img className="Image" alt="img" src="hq720.webp" /><div>제목이 들어가는 위치입니다.제목이 들어가는 위치입니다</div></Image>
    </Wrap>
  )
}

export default AudioContainer
