import React from 'react'
import styled from 'styled-components'
import Box from './Box';


const Name=styled.span`
  position:absolute;
  margin-top:20px;
  font-weight: 700;
  font-size: 19px;
  span{
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    margin-left:7px;
    color: #9B9B9B;
  }
`;
const Place=styled.span`
  position:absolute;
  font-weight: 400;
  font-size: 12px;
  color: #9B9B9B;
  margin-top:50px;
  span{
    margin-left:7px;
  }
`
const Description=styled.span`
  position:absolute;
  margin-top:75px;
  width:52%;
  max-width:250px;
  font-weight: 400;
  font-size: 11px;
`

function ConsultingItem(props) {
  const img=props.img;
  const name=props.name;
  const shop=props.shop;
  const place=props.place;
  const description=props.description;
  
  return (
    <Box>
      <img style={{width:'85px',height:'85px'}} className="Image" alt="img" src={process.env.PUBLIC_URL + `/img/${img}.png`}/>
      <Name>{name}<span>디자이너</span></Name>
      <Place>{shop}<span>{place}</span></Place>
      <Description>{description}</Description>
    </Box>
  )
}

export default ConsultingItem;
