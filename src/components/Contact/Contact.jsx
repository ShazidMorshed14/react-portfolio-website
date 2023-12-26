import emailjs from 'emailjs-com';
import React, { useContext, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { ThemeContext } from '../../Context';
import './Contact.css';
import Model from './Model';

const Contact = () => {
  const formRef = useRef();
  const [send, setSend] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_qm0dn9y',
        'template_julj3lp',
        formRef.current,
        'user_pjKaRrSuz5rmQdJ3YYjMr',
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
          Swal.fire(
            'Response Sent!',
            'Thank You for your response!',
            'success',
          );
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div className="c" id="#c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let&apos;s discuss your project!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://img.icons8.com/color/60/000000/phone.png"
                className="c-icon"
                alt="no_img"
              />
              +8801786990237
            </div>

            <div className="c-info-item">
              <img
                src="https://img.icons8.com/color/60/000000/gmail.png"
                className="c-icon"
                alt="no_img"
              />
              shazidmorshed14@gmail.com
            </div>

            <div className="c-info-item">
              <img
                src="https://img.icons8.com/color/60/000000/address.png"
                className="c-icon"
                alt="no_img"
              />
              7/j/2, Mirbug, Notun Rasta, Rampura, Dhaka
            </div>

            <div className="c-info-links">
              <a href="https://github.com/ShazidMorshed14">
                <img
                  alt="info-img"
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/35/000000/external-github-community-for-software-building-and-testing-online-logo-shadow-tal-revivo.png"
                />
              </a>
              <a href="https://www.facebook.com/shazid.morshed.56">
                <img
                  alt="info-img"
                  src="https://img.icons8.com/external-justicon-lineal-color-justicon/35/000000/external-facebook-social-media-justicon-lineal-color-justicon.png"
                />{' '}
              </a>
              <a href="https://www.linkedin.com/in/shazid-morshed-54a469196/">
                <img
                  alt="info-img"
                  src="https://img.icons8.com/external-justicon-lineal-color-justicon/35/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> What&apos;s your idea?</b> I&apos;m always ready to work on
            different ideas! Let&apos;s build your imagination into reality!
          </p>
          {send && <Model />}
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && 'lightgray' }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && 'lightgray' }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && 'lightgray' }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && 'lightgray' }}
              name="message"
              placeholder="Message"
              rows="5"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
