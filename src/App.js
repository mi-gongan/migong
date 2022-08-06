import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home";
import AppBar from './components/AppBar';
import TabBar from './components/TabBar';
import Consulting from './pages/Consulting';
import styled from 'styled-components'
import Start from './pages/Start'
import DesignerPage from './pages/DesignerPage';
// import Mypage from './pages/Mypage';
import TagManager from 'react-gtm-module';
// import {useCookies} from "react-cookie";
// import { useCallback, useEffect, useState } from 'react';
// import { addUser, getUser } from './firebase';

const Wrap=styled.div`
  max-width: 420px;
  min-width:340px;
  margin: 0 auto;
  background-color:white;
  height:100%;
`;

const Screen=styled.div`
  background-color:#DBDBDB;
  height:100%;
`;

function App() {
  // const [user,setUser]=useState('');
  // const [cookies, setCookie,deleteCookie] = useCookies(["ACCESS_TOKEN","user_id"]);
  
  const tagManagerArgs={
    gtmId:'GTM-WP3CPZX'
  };
  TagManager.initialize(tagManagerArgs);

  //로그인 기능
  /*
  const JAVASCRIPT_KEY='af3ae3ba242d443b6d27fade929c7419'

  const handleUser=useCallback(()=>{
    if(!user&&cookies.user_id){
      // !window.Kakao.isInitialized()&&window.Kakao.init(JAVASCRIPT_KEY);
      // window.Kakao.Auth.setAccessToken(cookies.ACCESS_TOKEN)
      getUser(cookies.user_id).then((user)=>{
        setUser({id:cookies.user_id,nickname:user.nickname,img:user.img,face_shape:(user.face_shape?user.face_shape:'')})
      }).catch(error=>console.log(error))
    }
  },[user,cookies.user_id])

  useEffect(()=>{
    handleUser()
  },[handleUser])

  const kakaoLogin=()=>{
    !window.Kakao.isInitialized()&&window.Kakao.init(JAVASCRIPT_KEY);
    window.Kakao.Auth.login({
      success: function(response) {
        // let date=new Date()
        // date.setTime(date.getTime()+response.expires_in)
        // window.Kakao.Auth.setAccessToken(response.access_token)
        // setCookie('ACCESS_TOKEN',String(response.access_token),{expires:date,path:'/'});
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function(data) {
              setCookie('user_id',data.id)
              if(getUser(String(data.id))){
                getUser(String(data.id)).then(user=>{
                  setUser({id:cookies.user_id,nickname:user.nickname,img:user.img,face_shape:(user.face_shape?user.face_shape:'')})
                }).catch(error=>console.log(error))
              }else{
                addUser(String(data.id),data.properties.nickname,data.properties.profile_image)
                setUser({id:String(data.id),nickname:data.properties.nickname,img:data.properties.profile_image})
              }
          },
          fail: function(error) {
              console.log(error);
              window.location.reload();
          }
        });
      },
      fail: function(error) {
        console.log(error);
        window.location.reload();
      },
    })
  }

  const kakaoLogout=()=>{
    // !window.Kakao.isInitialized()&&window.Kakao.init(JAVASCRIPT_KEY);
    // if (!window.Kakao.Auth.getAccessToken()) {
    //   console.log('Not logged in.');
    //   return;
    // }
    // window.Kakao.Auth.logout(function() {
    //   console.log(window.Kakao.Auth.getAccessToken());
    // }); 
    setUser('');
    // deleteCookie('ACCESS_TOKEN');
    deleteCookie('user_id');
    window.location.reload();
  }

  const kakaoExit=()=>{
    // !window.Kakao.isInitialized()&&window.Kakao.init(JAVASCRIPT_KEY);
    // window.Kakao.API.request({
    //   url: '/v1/user/unlink',
    //   success: function(response) {
    //     console.log(response);
    //   },
    //   fail: function(error) {
    //     console.log(error);
    //   },
    // });
    setUser('');
    // deleteCookie('ACCESS_TOKEN');
    deleteCookie('user_id');
    window.location.reload();
  };
  */

  return (
    <Screen>
      <Wrap>
        <Router basename={process.env.PUBLIC_URL}>
          <AppBar></AppBar>
          <TabBar></TabBar>
          <Routes>
            <Route path="/" element={<Start/>}/>
            <Route path="/home" element={<Home /*user_id={user?user.id:''}*/ />}/>
            <Route path="/consulting" element={<Consulting/>}/>
            {/* <Route path="/mypage" element={<Mypage kakaoLogin={kakaoLogin} kakaoLogout={kakaoLogout} kakaoExit={kakaoExit} user={user}/>}/> */}
            <Route path="/consulting/:designer" element={<DesignerPage/>}/>
          </Routes>
        </Router>
      </Wrap>
    </Screen>
  );
}
export default App;

