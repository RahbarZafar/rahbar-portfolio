import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Game Developer</h4>
                <h5>M.R Studio</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Developed and published Android games using Unity. Expert in UI/UX design, ads integration, 
              analytics, and ensuring Play Store policy compliance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Global Outreach</h4>
                <h5>International Development</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Interacted with international developers and studios; visited South Korea in 2024 
              after being approached by a gaming company for mobile titles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Market Research</h4>
                <h5>Global Trends</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Maintains an understanding of global trends and audiences through international travel, 
              including a personal visit to Saudi Arabia in 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
