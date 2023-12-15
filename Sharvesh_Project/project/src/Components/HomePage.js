import React from 'react';
import '../Assets/HomePage.css'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div class ="image">

      <section>
        <header>
            <nav>
                <div class="nav-links">
            <ul>
        <Link to="/"><li><a href="/HomePage">Home</a></li></Link>
        <Link to="/Explore"><li><a href="/Explore">Explore</a></li></Link>
        <Link to="/Explore"><li><a href="/Aboutus">About us</a></li></Link>
        <Link to="/Login"><li><a href="/Login">Login</a></li></Link>
        <Link to="/Logout"><li><a href="Logout">Logout</a></li></Link>
                {/* <li><a href="Home.js">Home</a></li> */}               
            </ul>
                </div>
            </nav>
            <div class="text-box">
                <h1>ORGANIX</h1>
                <p>"Cultivate your green oasis with our gardening store, where every seed of inspiration blossoms into vibrant landscapes."   </p>
                <a href="/Explore" class="main-btn">Explore more</a>
            </div>
        </header>
    </section>

    </div>
  );
}

export default HomePage;
