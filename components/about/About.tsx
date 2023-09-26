import React from 'react';
import AboutAnimation from './AboutAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUser, faN, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About me</h2>
      <div className="section-contents">
        <AboutAnimation />
        <ul>
          <li className="item-box">
            <a>
              <FontAwesomeIcon icon={faUser} />
              <b>Name</b>
              <div>황지현</div>
            </a>
          </li>
          <li className="item-box">
            <a href="mailto:vitaminzdev@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <b>Email</b>
              <div>vitaminzdev@gmail.com</div>
            </a>
          </li>
          <li className="item-box">
            <a href="https://github.com/vitaZ-dev" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <b>Github</b>
              <div>
                바로가기 <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </li>
          <li className="item-box">
            <a href="https://www.notion.so/e5ee79b802ef4edfbc3e0f50dd1c944c" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faN} />
              <b>Notion</b>
              <div>
                바로가기 <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
