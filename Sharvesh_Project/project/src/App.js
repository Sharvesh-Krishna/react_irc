import HomePage from "./Components/HomePage";
import Explore from "./Components/Explore";
import Aboutus from "./Components/Aboutus";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import './Assets/Explore.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/Explore" element={<Explore/>}/>
              <Route path="Aboutus" element={<Aboutus/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Logout" element={<Logout/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;