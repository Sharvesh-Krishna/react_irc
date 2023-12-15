import '../Assets/Home.css';
import '../Components/Login.js';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav style={{marginTop:"-12rem"}}>
      <ul>
        <Link to="/"><li><a href="/">Home</a></li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/register"><li><a href="/register">Register</a></li></Link>
        {/* <li><a href="/about">About Us</a></li> */}
      </ul>
    </nav>
  );
};

const HomePage = () => {
  return (
      <div class="backbish">
    <div class="Shayam">
      <Navbar />
      {/* <header>
      </header> */}
        <h1><center><u><br/></u></center></h1>
        <h1><center><u>Blooming Botanics</u></center></h1>
        <h1><center><u><br/></u></center></h1>
        <h2><center><i>"Where Seeds of Inspiration Blossom into Gardens of Possibility,</i></center></h2>
        <h2><center><i>there is Blooming Botanics!" </i></center></h2>
        {/* <h1>hello</h1> */}
      </div>
    </div>
  );
};



export default HomePage;
