/*src\pages\HomePage.jsx*/
import '../styles/HomePage.css'
import avatar from '../assets/avatar_1.jpg';
function Home() {
  return (
    <div className="home-container">
      {/* Section 1: Opening */}
      <section className="section welcome-section">
        <div className="welcome-container">
          <div className="welcome-left">
            <h2>Hi! I'm Jiang</h2>
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
          <div><i><span>Laravel</span></i></div>
          <div><i><span>Fastapi</span></i></div>
          <div><i><span>Express.js</span></i></div>
          <div><i><span>Mysql</span></i></div>
          <div><i><span>React</span></i></div>
          <div><i><span>Docker</span></i></div>
        </div>
      </section>

      {/* Section 3: Experiences */}
      <section className="section experience-section">
        <div className="experience-title">
          <h2>Experiences</h2>
        </div>
        <div className="experience-grid">
          <span>Nothing yet here~</span>
        </div>
      </section>
    </div>
  );
}

export default Home;