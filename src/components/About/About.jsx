import React from 'react';
import MeAbout from '../../img/me_about.jpg';
import '../About/About.css';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={MeAbout} alt="abour-pic" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a Full-Stack Developer. I have 2+ Year of professional experience
          of working as a Software Engineer with big organizations like
          BAT,Reckitt (Singapore) etc. I like to create modern and fully
          functional websites using modern technologies like React, Redux, Node
          js , MySql or MongoDB etc.!
        </p>
        <div className="a-education" style={{ marginBottom: '5px' }}>
          <h2 className="a-title">Experience</h2>
          <div style={{ margin: '0.5rem 0rem' }}>
            <p className="a-uni">Software Engineer (Full Stack)</p>
            <p>Manush Technologies Ltd.</p>
            <p style={{ fontSize: 'small' }}>May 2023-Present</p>
          </div>
          <div style={{ margin: '0.5rem 0rem' }}>
            <p className="a-uni">Software Engineer (React and Node js)</p>
            <p>AventraConsultant Ltd.</p>
            <p style={{ fontSize: 'small' }}>Dec 2021-Mar 2022</p>
          </div>
        </div>
        <div className="a-education">
          <h2 className="a-title">Education</h2>
          <p className="a-uni">
            Ahsanullah University Of Science & Technology,Bangladesh
          </p>
          <p>B.Sc. in Computer Science & Engineering</p>
          <p style={{ fontSize: 'small' }}>2017-2021</p>
        </div>
      </div>
    </div>
  );
};

export default About;
