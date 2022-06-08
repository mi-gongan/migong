import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Box from './Box';

const Wrap=styled.div`
  position:relative;
  margin-top:20px;
  Box{
    top:20px;
    position:absolute;
  }
  img{
    position:absolute;
    width:83px;
    height:83px;
  }
  span:nth-child(1){
    font-weight: 700;
    font-size: 17px;
    position:absolute;
    left:145px;
    top:27px;
  }
  span:nth-child(3){
    position:absolute;
    font-weight: 400;
    font-size: 10px;
    left:193px;
    top:35px;
    color: #9B9B9B;
  }
  span:nth-child(4){
    left:144px;
    top:63px;
    position:absolute;
    font-weight: 400;
    font-size: 10px;
    color: #9B9B9B;
    padding-left:12px;
    img{
      position:absolute;
      left:0px;
      top:1.5px;
      width:9px;
      height:9px;
      margin:0px;
    }
  }
  span:nth-child(5){
    left:260px;
    top:63px;
    position:absolute;
    font-weight: 400;
    font-size: 10px;
    color: #9B9B9B;
    padding-left:12px;
    img{
      position:absolute;
      left:0px;
      top:1.5px;
      width:9px;
      height:9px;
      margin:0px;
    }
  }
  span:nth-child(6){
    left:144px;
    top:82px;
    position:absolute;
    font-weight: 400;
    font-size: 10px;
    color: #9B9B9B;
    padding-left:12px;
    img{
      position:absolute;
      left:0px;
      top:1.5px;
      width:9px;
      height:9px;
      margin:0px;
    }
  div:nth-child(7){
    position:absolute;
    top:30px;
    width:80%;
    height:1px;
  }
`;
const Cta=styled.div`
  border-top:#EEEEEE solid;
  position:fixed;
  width:100%;
  max-width:420px;
  bottom:00px;
  height:75px;
  text-align:center;
  button{
    position:absolute;
    left:50%; 
    transform:translateX(-50%);
    margin-top:12px;
    background-color:black;
    color:white;
    height:50px;
    border-radius:10px;
    border:none;
    font-size:16px;
    padding:0px;
    width:80%;
    max-width:380px;
    cursor:pointer;
  }
  a{
    text-decoration:none;
    color:white;
  }
`;

// const Line=styled.div`
//   width:90%;
//   left:50%;
//   transform:translateX(-50%);
//   height:1px;
//   position:absolute;
//   top:130px;
//   background-color:#D8D8D8;
// `

const Div=styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  border-radius: 9px;
  height:120px;
  margin:0px 20px 20px 20px;

`;


const Description=styled.div`
  font-weight: 700;
  font-size: 13px;
  margin:40px 0px 20px 40px;
`


function DesignerPage() {
  const {designer}=useParams();
  const location=useLocation();
  const img=location.state.img;
  const shop=location.state.shop;
  const place=location.state.place;
  const bookingUrl=location.state.bookingUrl;
  const insta=location.state.insta
  return (
    <Wrap>
      <Box>
        <span>{designer}</span>
        <img className="Image" alt="img" src={process.env.PUBLIC_URL + `/img/${img}.png`}/>
        <span>디자이너</span>
        <span><img className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/hairShopIcon.png"}/>{shop}</span>
        <span><img className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/placeIcon.png"}/>{place}</span>
        <span><img className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/instaIcon.png"}/>{insta}</span>
      </Box>    
      {/* <Line></Line> */}
      <Description>컨설팅 내용</Description>
      <Div>
        
      </Div>
      <Cta>
      <a href={bookingUrl}><button>예약하러가기</button></a>
      </Cta>
    </Wrap>
  )
}

export default DesignerPage;