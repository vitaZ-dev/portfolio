import React from 'react';
import ProjectItem from './ProjectItem';

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
        <ProjectItem />
      </div>
    </section>
  );
};

export default Projects;
