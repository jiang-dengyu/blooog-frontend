/*src\pages\HomePage.jsx*/
import '../styles/HomePage.css'
import TypingText from '../components/TypingText';
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
            <TypingText text="Hi! I'm Jiang." speed={80} className="typing-h2" />
            <TypingText text="Welcome to My Blooog~" speed={80} className="typing-h2" />
            <TypingText text="A place for my notes, and for you to get to know me" speed={30} className="typing-p" />
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
          <p>2024, Jul ~ now</p>
          <p>
            Backend Developer – Government Contract System(Laravel + MSSQL + Redis + Socket.io)
          </p>
          <ul>
            <li>Maintained and improved key modules, including project start, schedule planning, and tender process</li>
            <li>Developed new features, such as failed bidding handling</li>
            <li>Assisted in debugging production issues (e.g., server errors, VM connection limits, WebSocket failures)</li>
            <li>Helped stabilize real-time messaging using Laravel Echo with Redis and Socket.io</li>
            <li>Proposed and implemented calendar API data backups, which helped during actual API downtime</li>
            <li>Identified a database schema issue after incorrect production data entry, and provided both short-term fixes and long-term suggestions</li>
            <li>Optimized the Word export module for speed and reliability</li>
            <li>Wrote WinSCP deployment scripts, reducing backend deployment time by over 75%</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;