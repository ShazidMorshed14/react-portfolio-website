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

  const cv_file_url = 'http://localhost:3000/shazid_morshedul_haque_cv.pdf';

  const downloadTemplateFile = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello,My Name is</h2>
          <h1 className="i-name">Shazid Morshed</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">App Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Musician</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>

          <div className="i-desc">
            <button
              className="btn-cv"
              onClick={() => downloadTemplateFile(cv_file_url)}>
              Download CV
            </button>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ShazidMorshed14">
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
