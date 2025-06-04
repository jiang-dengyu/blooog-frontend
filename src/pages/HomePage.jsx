/*src\pages\HomePage.jsx*/
import '../styles/HomePage.css'
import avatar from '../assets/avatar_1.jpg';
import pythonIcon from '../assets/python.svg';
import phpIcon from '../assets/php.svg';
import expressIcon from '../assets/express.svg';
import mysqlIcon from '../assets/mysql.svg';
import dockerIcon from '../assets/docker.svg';
import coffeeCup from '../assets/coffee-cup.png';
import bg from '../assets/background.jpg';

function Home() {
  return (
    <div className="home-container" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Section 1: Opening */}
      <section className="section welcome-section">
        <div className="welcome-container">
          <div className="welcome-left">
            <h2>Hi! I'm Jiang.</h2>
            <p>Welcome to My Portfolio,</p>
            <p>Blooog!</p>
          </div>
          <div className="welcome-right">
            <div className="avatar-placeholder">
              <img src={avatar} alt="avatar"></img>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Skills */}
      <section className="section Skills-section">
        <div className="Skills-title">
          <h2>The Skills or Tools</h2>
        </div>
        <div className="Skills-grid">
          <div><span>Laravel </span><img src={pythonIcon}></img ></div>
          <div><span>Fastapi </span><img src={phpIcon}></img></div>
          <div><span>Express.js </span><img src={expressIcon}></img></div>
          <div><span>Mysql </span><img src={mysqlIcon}></img></div>
          <div><span>Docker </span><img src={dockerIcon}></img></div>
        </div>
      </section>

      {/* Section 3: Experiences */}
      <section className="section experience-section">
        <div className="experience-title">
          <h2>Experiences</h2>
        </div>
        <div className="experience-grid">
          <p>Nothing here yet~</p>
          <img src={coffeeCup}></img>
        </div>
      </section>
    </div>
  );
}

export default Home;