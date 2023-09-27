import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="section-contents">
        <ul style={{ display: 'none' }}>
          <li>smart-grade</li>
          <li>food-roulette</li>
          <li>포트폴리오 제작</li>
          <li>퍼블리싱 - swiper</li>
        </ul>
        <div style={{ width: '75%', background: 'aliceblue', margin: '0 auto' }}>
          project-name <br />
          <FontAwesomeIcon icon={faCheck} /> 소개글 <br />
          <FontAwesomeIcon icon={faCheck} /> 주요기능? 2(FE) <br />
          <FontAwesomeIcon icon={faCheck} /> 작업인원 2(FE) <br />
          <FontAwesomeIcon icon={faCheck} /> 작업기간 2022.05.12 ~ 2022.05.14 <br />
          <FontAwesomeIcon icon={faCheck} /> 사용기술 HTML5 CSS3 JavaScript <br />
          <FontAwesomeIcon icon={faCheck} /> 작업파트 HTML 마크업 CSS 스타일링 <br />
          <FontAwesomeIcon icon={faCheck} /> 배포 vercel? <br />
          <FontAwesomeIcon icon={faCheck} /> 깃허브 github <br />
        </div>
      </div>
    </section>
  );
};

export default Projects;
