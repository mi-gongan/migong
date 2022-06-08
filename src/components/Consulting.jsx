import React,{useState} from 'react'
import ConsultingList from './ConsultingList'
import styled from 'styled-components'

const Div=styled.div`
  position:absolute;
  width:150px;
  height:100vh;
  background-color:white;
  img{
    width:24px;
    height:24px;
    margin-left:120px;
    margin-top:10px;
    cursor:pointer;
  }
  ul{
    list-style-type : none;
    text-align:center;
    padding-left: 0px;
  }
  li{
    list-style-type : none;
    padding:10px;
    cursor:pointer;
    &.active{
      background-color:#D9D9D9;
    }
  }
  z-index:999;

`
const Back=styled.div`
  position:absolute;
  top:108px;
  width:100%;
  max-width:420px;
  height:100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Span=styled.span`
  margin-left:1px;
  padding:10px;
  font-size:8px;
  &:hover{
    cursor:pointer;
  }
  font-weight:bold;
  img{
    height:14px;
    weight:14px;
    position:absolute;
    padding-top:4.5px;
  }
`
const Wrap=styled.div`
`
function Consulting() {
  const [isOpen,setIsOpen]=useState('');
  const [selected,setSelected]=useState(['관악구','강남구','마포구'])
  const handleClick=()=>{
    setIsOpen('Open');
  }
  const handleDelete=()=>{
    setIsOpen('');
  }
  const onSelected=(e)=>{
    if(e.target.innerHTML==='전체'){
      setSelected(['관악구','강남구','마포구'])
    }else{
      setSelected(e.target.innerHTML)
    }
  }
  return (
    <>
      <>
        {isOpen==='Open'&&
          <Wrap>
            <Back></Back>
            <Div>
              <img onClick={handleDelete} className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/lucide_x_black.png"} />
              <ul>
                <li onClick={onSelected} className={JSON.stringify(selected)===JSON.stringify(['관악구', '강남구', '마포구'])?'active':''}>전체</li>
                <li onClick={onSelected} className={selected==='관악구'?'active':''}>관악구</li>
                <li onClick={onSelected} className={selected==='강남구'?'active':''}>강남구</li>
                <li onClick={onSelected} className={selected==='마포구'?'active':''}>마포구</li>
              </ul>
            </Div>
          </Wrap>
        }
      </>
      <div style={{padding:'10px',marginBottom:'5px'}}><Span onClick={handleClick}>지역설정<img onClick={handleDelete} className="Image" alt="img" src={process.env.PUBLIC_URL + "/img/lucide_chevron-left.png"} /></Span></div>
      <ConsultingList selected={selected}></ConsultingList>
    </>
  )
}

export default Consulting