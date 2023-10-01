import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ProjectItem = () => {
  return (
    <div className="project-item">
      <div className="item-title">
        웹 포트폴리오 solo project <br />
        작업기간 2022.05.12 ~ 2022.05.14 (solo/협업)
      </div>
      <div className="item-box">
        <div className="item-thumbnail"></div>
        <div className="item-detail">
          <FontAwesomeIcon icon={faCheck} /> 소개글 <br />
          <FontAwesomeIcon icon={faCheck} /> 주요기능? 2(FE) <br />
          <FontAwesomeIcon icon={faCheck} /> 작업인원 2(FE) <br />
          <FontAwesomeIcon icon={faCheck} /> 사용기술 HTML5 CSS3 JavaScript <br />
          <FontAwesomeIcon icon={faCheck} /> 작업파트 HTML 마크업 CSS 스타일링 <br />
          <FontAwesomeIcon icon={faCheck} /> 배포 vercel? <br />
          <FontAwesomeIcon icon={faCheck} /> 깃허브 github <br />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
