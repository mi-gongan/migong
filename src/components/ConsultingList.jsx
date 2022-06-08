import React from 'react'
import styled from 'styled-components'
import ConsultingItem from './ConsultingItem';
import { Link } from 'react-router-dom';


const Ul=styled.ul`
  margin:0px;
  listStyleType:none;
  padding:0px;
  .show{
    display:block;
  }
  .noshow{
    display:none;
  }
`

function ConsultingList(props) {
  const selected=props.selected;
  return (
    <Ul>
      <Link to='/Consulting/백가현' state={{img:'gahyeon', name:'백가현', shop:'준오헤어 서울대입구역점', place:'관악구 봉천동',bookingUrl:'https://m.booking.naver.com/booking/13/bizes/45770/items/4323325?area=ple',insta:'juno_k.hyeon'}} style={{ textDecoration: 'none', color: 'black'}} ><li className={selected.includes('관악구')?'show':'noshow'}><ConsultingItem img='gahyeon' name='백가현' shop='준오헤어 서울대입구역점' place='관악구 봉천동' description='간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단명'></ConsultingItem></li></Link>
      {/* <Link to='/Consulting/김한솔' style={{ textDecoration: 'none', color: 'black'}}><li className={selected.includes('강남구')?'show':'noshow'}><ConsultingItem img='designer2' name='김한솔' shop='준오헤어 강남역점' place='강남구 역삼동' description='간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단명'>강남구</ConsultingItem></li></Link>
      <Link to='/Consulting/이한서' style={{ textDecoration: 'none', color: 'black'}} ><li className={selected.includes('마포구')?'show':'noshow'}><ConsultingItem img='designer3' name='이한서' shop='준오헤어 홍대입구역점' place='마포구 동교동' description='간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단한 설명간단명'>마포구</ConsultingItem></li></Link> */}
    </Ul>
  )
}

export default ConsultingList;

