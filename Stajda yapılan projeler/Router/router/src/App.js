
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import Misssion from './components/Misssion';
import WrongPath from './components/WrongPath';
import History from './components/History';
import Company from './components/Company';
import Team from './components/Team';
import Member from './components/Member';
import MemberDetail from './components/MemberDetail';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/aboutUs' element={<AboutUs/>}  />
      <Route path='/mission' element={<Misssion/>}  />
      <Route path='/history' element={<History/>} >
        <Route path='company' element={<Company/>}/>
        <Route path='team' element={<Team/>}/>

      </Route>
      <Route path='/member' element={<Member/>}  />
      <Route path='/member/:memberId' element={<MemberDetail/>}  />
      <Route path='*' element={<WrongPath/>}  />
     </Routes>
    </div>
  );
}

export default App;
