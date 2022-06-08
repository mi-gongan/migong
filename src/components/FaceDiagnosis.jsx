import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import CharacterBar from './CharacterBar';
import { useCookies } from "react-cookie";

const Img=styled.div`
  text-align: center;
  top:70px;
  padding:20px 0px;
  width:300px;
  left:50%;
  transform:translateX(-50%);
  background: #FFFFFF;
  box-shadow: 0px 0px 21px 3px rgba(0, 0, 0, 0.13);
  border-radius: 25px;
  position:absolute;
  z-index:1;
  img{
    width:96px;
    height:96px;
  }
`;
const Description=styled.div`
  font-size:10px;
  margin-left:20px;
  margin-top:30px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  position:absolute;
  top:250px;
`;

const Name=styled.div`
  text-align: center;
  margin:10px 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;


const SizeBox=styled.div`
  width:90%;
  margin:20px;
  background: #FFFFFF;
  box-shadow: 0px 0px 39px 3px rgba(0, 0, 0, 0.09);
  border-radius: 22px;
  max-width:420px;
  min-width:300px;
  height:160px;
  position:absolute;
  padding-top:10px;
  padding-bottom:10px;
  top:300px;
  div{
    justify-content:center;
  }
`
const Title=styled.div`
  margin-left:20px;
  margin-top:28px;
  margin-bottom:28px;
  font-size:16px;
  // color:white;
  font-weight:700;
  position:absolute;
  z-index:1;
`;

// const Back=styled.div`
//   max-width:420px;
//   min-width:300px;
//   width:100%;
//   height: 163px;
//   position:absolute;
//   background: linear-gradient(180deg, #000000 0%, #373737 87.09%);
//   border-bottom-left-radius: 20%;
//   border-bottom-right-radius: 20%;
// `;

const Wrap=styled.div`
  background-color:white;
  max-width:420px;
  min-width:300px;
  width:100%;
  height:530px;
  position:relative;
  
`
function FaceDiagnosis(props) {
  const aspectRatio=props.character.aspect;
  const cheekSize=props.character.cheek;
  const jawSize=props.character.jaw;
  const [imgs,setImgs]=useState('')
  const [shape,setShape]=useState('')
  const [cookies, setCookie] = useCookies(['rememberImg']);

  useEffect(()=>{
    if(cookies.rememberImg!== undefined){
      setImgs(cookies.rememberImg);
    }
  },[cookies.rememberImg])

  useEffect(()=>{
    let imgText=''
    if(aspectRatio>=0.9){
      imgText+='L'
    }else{
      imgText+='S'
    }
    if(cheekSize>3){
      imgText+='C'
      if(jawSize>8){
        imgText+='J'
        setShape('땅콩형')
      }else{
        setShape('마름모형')
      }
    }else{
      if(jawSize>8){
        imgText+='J'
        setShape('육각형')
      }else{
        setShape('계란형')
      }
    }
    
    setImgs(imgText)
    setCookie('rememberImg', imgText, '1')
  },[aspectRatio,cheekSize,jawSize,setCookie])
  const imgUrl=process.env.PUBLIC_URL + `/img/${imgs}.png`
  return (
    <Wrap>
      <Title>얼굴형 진단서</Title>
      {/* <Back></Back> */}
      <Img><img alt={imgs.current} src={imgUrl} /><Name><span>{aspectRatio>=0.9?'긴':"짧은"}</span>&nbsp;<span>{shape}</span></Name></Img>
      <Description>주요크기</Description>
      <SizeBox >
          <div><CharacterBar size={cheekSize>=3?Math.floor(25*cheekSize/4+125/4):Math.floor(50*cheekSize/3)} character='광대' isOrnot={cheekSize>=3?'있음':'없음'}></CharacterBar></div>
          <div><CharacterBar size={cheekSize>=8?Math.floor(10*(jawSize-3)):Math.floor(25*jawSize/4)} character='턱' isOrnot={jawSize>=8?'있음':'없음'}></CharacterBar></div>
          <div><CharacterBar size={aspectRatio>=0.9?Math.floor(250*(aspectRatio-0.7)):Math.floor(500*aspectRatio/3-100)} character='얼굴길이' isOrnot={aspectRatio>=0.9?'긴형':'짧은형'}></CharacterBar></div>
      </SizeBox>
    </Wrap>
  )
}
export default FaceDiagnosis
