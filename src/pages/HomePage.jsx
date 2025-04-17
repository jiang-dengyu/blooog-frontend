import '../styles/HomePage.css'
function Home() {
  return (
    <div className="home-container">
      {/* Section 1: Opening */}
      <section className="section welcome-section">
        <div className="welcome-container">
          <div className="welcome-left">
            <h2>Hi! I'm Jiang</h2>
            <p>A Backend Engineer</p>
            <p>Welcome To My Portfolio, Blooog!</p>
          </div>
          <div className="welcome-right">
            <div className="avatar-placeholder">[Avatar]</div>
          </div>
        </div>
      </section>

      {/* Section 2: Projects */}
      <section className="section project-section">
        <div className="project-title">
          <h2>The Projects I Did</h2>
        </div>
        <div className="project-grid">
          <div className="project-box">Project 1</div>
          <div className="project-box">Project 2</div>
          <div className="project-box">Project 3</div>
        </div>
      </section>

      {/* Section 3: Experiences */}
      <section className="section experience-section">
        <h2>Experiences</h2>
      </section>
    </div>
  );
}

export default Home;