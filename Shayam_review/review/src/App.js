// import logo from './logo.svg';
// import './App.css';

// import HomePage from "./Components/HomePage";
// import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
