import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home";
import AppBar from './components/AppBar';
import TabBar from './components/TabBar';
import Audio from './components/Audio';
import Consulting from './components/Consulting';
import MyPage from './components/MyPage';
import styled from 'styled-components'
import Start from './components/Start'
import {app} from "./firebase"
import Auth from "./Auth"
import DesignerPage from './components/DesignerPage';

const Wrap=styled.div`
  max-width: 420px;
  min-width:340px;
  margin: 0 auto;
  background-color:white;
  height:100vh;
`;

const Screen=styled.div`
  background-color:#DBDBDB;
  height:100vh;
`;

function App() {
  console.log(app)
  return (
    <Screen>
      <Wrap>
        <Router>
          <AppBar></AppBar>
          <TabBar></TabBar>
          <Routes>
            <Route path="/" element={<Start/>}/>
            <Route path="/oauth/kakao/callback" element={<Auth/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Audio" element={<Audio/>}/>
            <Route path="/Consulting" element={<Consulting/>}/>
            <Route path="/MyPage" element={<MyPage/>}/>
            <Route path="/Consulting/:designer" element={<DesignerPage/>}/>
          </Routes>
        </Router>
      </Wrap>
    </Screen>
  );
}
export default App;

