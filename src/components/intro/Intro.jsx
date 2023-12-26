import React from 'react';
import Me from '../../img/my_img_blk_2.png';
import './Intro.css';

const Intro = () => {
  // function handleScroll() {
  //   window.scroll({
  //     top: document.body.offsetHeight,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello,My Name is</h2>
          <h1 className="i-name">Shazid Morshed</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Musician</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>

          <div className="i-desc">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/drive/folders/1ZSIx0n4Rrboa9rqHlRORLrqksG8erWI_?usp=sharing"
            >
              <button className="btn-cv">Download CV</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ShazidMorshed14"
            >
              <button className="btn-c">Github</button>
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
