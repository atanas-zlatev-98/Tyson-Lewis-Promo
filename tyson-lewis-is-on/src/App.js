import './App.css';
import Footer from './Componets/Footer/Footer';
import NavBar from './Componets/NavBar/NavBar';
import Home from './Pages/Home';
import PPV from './Pages/PPV';
import TeamLewis from './Pages/TeamLewis';
import TeamTyson from './Pages/TeamTyson';
import './Style/default_style.scss';
import './Style/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <Router>
   <NavBar/>

    <Routes>
    
      <Route path='/' element={<Home/>}></Route>
      <Route path="/PPV" element={<PPV/>}></Route>
      <Route path="/team-tyson" element={<TeamTyson/>}></Route>
      <Route path="/team-lewis" element={<TeamLewis/>}></Route>
      </Routes>

    <Footer></Footer>
   </Router>
  );
}

export default App;
