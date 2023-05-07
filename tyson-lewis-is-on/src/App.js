import './App.css';
import NavBar from './Componets/NavBar/NavBar';
import Home from './Pages/Home';
import './Style/default_style.scss';
import './Style/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <Router>
   <NavBar/>

    <Routes>
    
      <Route path='/' element={<Home/>}></Route>
      {/*
      <Route path='/projects' element={}></Route>
      <Route path='/contacts' element={}></Route>
      <Route path='/red-dead-redemption' element={}></Route>*/}
      </Routes>

   </Router>
  );
}

export default App;
