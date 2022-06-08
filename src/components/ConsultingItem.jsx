import React from 'react'
import styled from 'styled-components'
import Box from './Box';


const Name=styled.span`
  position:absolute;
  margin-top:20px;
  font-weight: 700;
  font-size: 16px;
  span{
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    margin-left:7px;
    color: #9B9B9B;
  }
`;
const Place=styled.span`
  position:absolute;
  font-weight: 400;
  font-size: 10px;
  color: #9B9B9B;
  margin-top:45px;
  span{
    margin-left:7px;
  }
`
const Description=styled.span`
  position:absolute;
  margin-top:64px;
  width:53%;
  max-width:250px;
  font-weight: 400;
  font-size: 8px;
`

function ConsultingItem(props) {
  const img=props.img;
  const name=props.name;
  const shop=props.shop;
  const place=props.place;
  const description=props.description;
  return (
    <Box>
      <img className="Image" alt="img" src={process.env.PUBLIC_URL + `/img/${img}.png`}/>
      <Name>{name}<span>디자이너</span></Name>
      <Place>{shop}<span>{place}</span></Place>
      <Description>{description}</Description>
    </Box>
  )
}

export default ConsultingItem;
